---
name: melonity-recipe
description: Создаёт новый recipe-документ в melonity_info/recipes/ по стандартной структуре + соответствующий .ts файл в examples/.
---

# Скилл — новый recipe

Recipe — это рецепт-документ: постановка задачи, API, код, разбор, расширения, ошибки. Все существующие recipe живут в `melonity_info/recipes/` с единой структурой.

## Аргументы

- **slug** (kebab-case): `esp_wards`, `smart_tp`, `auto_refresher`
- **Краткое описание** того, что должен делать рецепт

Пример: `/melonity-recipe auto_snatcher — выхватывает спавн рун за N секунд до появления`

## Шаги

### 1. Проверь, нет ли уже такого

```
Glob: melonity_info/recipes/*<slug>*.md
Glob: melonity_info/examples/*<slug>*.ts
```

Если есть — предложи пользователю либо переименовать новый, либо доработать существующий.

### 2. Прочитай спеку функциональности

- `melonity_info/features.md` — non-hero фичи
- `melonity_info/heroes.md` — если это геро-специфичный helper
- `melonity_info/common_combo_pattern.md` — общие паттерны

Выжимка спеки должна войти в секцию "Что получается".

### 3. Сгенерируй `.md` по шаблону

Путь: `melonity_info/recipes/<slug>.md`

```markdown
# Recipe — <Title>

<1-2 абзаца зачем и для кого эта фича.>

## Что получается

- <bullet list результатов>
- <с UX-деталями>
- <какие edge cases покрыты>

## Используемые API

- `<Namespace.Method>` — краткое описание
- …

## Код

```typescript
// src/<slug>.ts
let <Script>: ScriptDescription = {};

namespace <scope> {
    const PATH = ['<Category>', '<Feature>'];

    // Menu опции
    const masterOpt = Menu.AddToggle(PATH, 'Enable', true).SetGeneral(true);
    // ...

    // Callbacks
    <Script>.OnScriptLoad = () => { /* ... */ };
    <Script>.OnUpdate = () => { /* ... */ };

    RegisterScript(<Script>, '<Display Name>');
}
```

## Ключевые моменты

### <Важный аспект 1>
<Объяснение + код-фрагмент>

### <Важный аспект 2>
<...>

## Расширения

### <Вариант 1 — полезное добавление>
```typescript
<код-фрагмент>
```

### <Вариант 2>
<...>

## Тонкости

### <Каверза 1 — то, что легко пропустить>

### <Humanizer/Safe Mode/другой системный нюанс>

## Частые ошибки

1. **<Ошибка>** — <как фиксить>
2. **<Ошибка>** — <...>
```

### 4. Сгенерируй парный `.ts` файл в examples/

Путь: `melonity_info/examples/<slug>.ts`

- Заголовок-комментарий со ссылкой на recipe: `// Источник: melonity_info/recipes/<slug>.md`
- `/// <reference path="../../template-custom-scripts-main/declarations/callbacks.d.ts" />`
- Полный автономный код (можно копировать в `template-custom-scripts-main/src/`)

### 5. Обнови индексы

1. `melonity_info/README.md` — таблица recipes. Добавь строку.
2. `melonity_info/examples/README.md` — таблица examples. Добавь строку.

## Обязательно в каждом recipe

- [ ] Все API-имена соответствуют declarations (прогнать через `/melonity-verify-api` перед записью)
- [ ] В "Частые ошибки" есть минимум 3 типичные засады
- [ ] В "Расширения" — минимум 2 варианта улучшения
- [ ] В "Ключевые моменты" — почему выбрано именно такое решение (e.g. «почему сэмплинг, а не DrawOutlineCircle»)
- [ ] Код проходит `/melonity-build-check` (type-check чистый)
- [ ] Парный `.ts` в `examples/` создан и упомянут в `examples/README.md`

## Структурные отличия разных recipe-типов

| Тип | Упор на |
|---|---|
| **Геро-специфичный** (combo-helper ульта, invoker sequence) | `OnUpdate` + `OnPrepareUnitOrders`, маппинг на `common_combo_pattern.md` |
| **ESP/отрисовка** (range indicator, ward ESP) | `OnDraw`/`OnDrawOverUI`, `WorldToScreen`, шрифты и цвета |
| **Реактивный safeguard** (auto-dodge, auto-save) | `OnTargetProjectileObjectCreate`/`OnModifierCreate` + Humanizer-совместимость |
| **GC/сетевой** (auto-accept, анти-репорт) | `NetMessages.Register*` + Safe Mode deградация + poll-fallback |
| **Information** (rune timer, courier, jungle timer) | `OnDrawOverUI`, `GameRules.GetGameTime`, `Engine.OnceAtByKey(1.0, ...)` для алертов |

Выбери правильный шаблон — для «ESP»-рецепта не надо раздел про `OnPrepareUnitOrders`, для комбо не нужен раздел про WorldToScreen.

## Связанные скиллы

- `/melonity-verify-api` — проверить API перед написанием
- `/melonity-build-check` — прогнать код после
- `/melonity-test-harness` — добавить jest-тест
- `/melonity-new-script` — если пользователь хочет сразу готовый скрипт без документа
