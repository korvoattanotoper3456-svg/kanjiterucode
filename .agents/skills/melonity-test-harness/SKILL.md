---
name: melonity-test-harness
description: Добавляет unit-тест на Melonity-скрипт через Node mock-harness из melonity_info/examples/test_harness.ts без запуска Dota.
---

# Скилл — тест Melonity-скрипта в Node

Запуск скрипта в Node.js со всеми Melonity-глобалями (Menu, Engine, Renderer, EntitySystem, Input, Vector, Color, Enum), заглушенными in-memory. Позволяет unit-тестить логику OnUpdate/callback'ов без Dota.

## Аргументы

- **Имя скрипта** (`pudge_combo`, `auto_dodge`) — что тестировать
- **Сценарий** (опционально): `basic`, `combo-key-down`, `target-in-range` — что именно проверить. Если нет — сгенерируй «smoke-test»: скрипт загружается без крашей + OnUpdate зовётся 10 раз.

## Предусловия

### 1. harness.ts в проекте

Проверь: `c:/Users/user/Desktop/ScriptsMelonity/template-custom-scripts-main/test/harness.ts`.

Если нет — скопируй из шаблона:
```bash
cp melonity_info/examples/test_harness.ts template-custom-scripts-main/test/harness.ts
```

### 2. Jest настроен

Проверь `package.json` → есть ли `"jest"` в devDependencies + скрипт `"test"`.

Если нет — добавь:
```bash
cd template-custom-scripts-main
npm install --save-dev jest ts-jest @types/jest @types/node
```

И в `package.json`:
```json
"jest": {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "testMatch": ["<rootDir>/test/*.test.ts"]
},
"scripts": {
  "test": "jest"
}
```

## Шаблон теста

Путь: `template-custom-scripts-main/test/<script>.test.ts`

```typescript
import { globalState, tick, reset } from './harness';

// Импорт скрипта выполнит его код (регистрация меню, колбэков)
// ВАЖНО: у скрипта должен быть export чего-нибудь, иначе TS может не импортировать
// Либо используй side-effect import:
import '../src/<script_name>';

describe('<ScriptName>', () => {
    beforeEach(reset);

    it('loads without errors', () => {
        expect(globalState.scripts.length).toBeGreaterThan(0);
    });

    it('registers OnUpdate callback', () => {
        const script = globalState.scripts.find(s => s.name.includes('<...>'));
        expect(script?.desc.OnUpdate).toBeDefined();
    });

    it('does nothing when master disabled', () => {
        // Manipulate menu state — найти masterOpt и SetValue(false)
        // После tick() не должно быть побочных эффектов
        for(let i = 0; i < 10; i++) tick();
        expect(globalState.eventLog).toHaveLength(0);
    });

    // Геро-специфичные сценарии:
    it('attacks target when combo key held', () => {
        // 1. Включи master + имитируй key-down (переопредели IsKeyDown на true)
        // 2. Положи врага в globalState.heroes с низким HP
        // 3. Положи LocalHero с HERO_NAME
        // 4. tick() несколько раз
        // 5. expect(globalState.eventLog).toContain('AttackTarget:<enemy>')
    });
});
```

## Расширение harness под скрипт

`test_harness.ts` покрывает базу, но **не всё**. Частые пропуски:

| Если скрипт использует | Добавь в harness |
|---|---|
| `OnTargetProjectileObjectCreate` | `TargetProjectileObject` mock-класс |
| `OnModifierCreate` | `Modifier` mock + триггер из теста |
| `NetMessages.RegisterRecv` | `NetMessages` namespace + `triggerRecv(name, data)` helper |
| `GC.Request` | mock с заданным ответом через `onResolve` |
| `Humanizer.IsEnabled` | `Humanizer = { IsEnabled: () => false }` |
| `Panorama.CreatePanel` | `Panorama = { CreatePanel: jest.fn() }` |

Добавляй методы **только** когда нужны конкретному тесту, не заглушай всё подряд — шум.

## Что тестировать в первую очередь

1. **Smoke**: скрипт не крашится при загрузке (OnScriptLoad, RegisterScript).
2. **Master-off behaviour**: при `masterOpt.value = false` никаких побочных действий.
3. **Happy path**: комбо-клавиша зажата + подходящая цель → ожидаемые ордеры в `eventLog`.
4. **Edge cases**: LocalHero = null, пустой список целей, target вне радиуса, цель с Linken's / Lotus.
5. **Throttling**: `Engine.OnceAtByKey` корректно ограничивает частоту.

## Что **не** тестировать

- Отрисовку (`OnDraw`) — harness заглушает `Renderer.*` no-op'ом, нечего проверять. Только Level 4 (в игре).
- Реальный урон / HP пересчёт крипов — это не твой код, а движок Dota.
- Точный рендер UI — Panorama не симулируется осмысленно в Node.

## Формат вызова после создания теста

```bash
cd c:/Users/user/Desktop/ScriptsMelonity/template-custom-scripts-main
npx jest test/<script>.test.ts
```

Для watch-режима:
```bash
npx jest --watch
```

## Частые ловушки

1. **Скрипт использует `MemoryAccessor`** → в harness это обычные объекты, `IsExist()` возвращает `true`. Добавь `npc.IsExist = () => false` если тестируешь destroy-path.
2. **`Engine.OnceAtByKey` с `realTime=true`** → `globalState.realTime` увеличивается только через `tick()`. Если тест не дёргает tick — throttle ничего не пропустит.
3. **`LocalHero` — глобал, не `EntitySystem.GetLocalHero()`** → в harness оба источника должны указывать на один объект, иначе тесты за них хватаются разные.
4. **`import '../src/script'` без side-effect flag** → ts-jest может вытрясти пустой import. Добавь явно в `tsconfig.json` `"importsNotUsedAsValues": "preserve"` или заменяй на `require('../src/script')`.

## Связанные скиллы

- `/melonity-build-check` — убедиться что скрипт тайп-чекается перед тестом
- `/melonity-new-script` — если пишешь новый скрипт, сразу добавляй тест
