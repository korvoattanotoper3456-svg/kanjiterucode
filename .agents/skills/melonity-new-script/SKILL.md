---
name: melonity-new-script
description: Генерирует TypeScript-скрипт для Melonity — комбо героя или non-hero feature (ESP, helper, auto-accept и т.д.) со всеми проверенными API-именами и паттернами.
---

# Скилл — новый Melonity-скрипт

Задача этого скилла — дать Codex полный рабочий контекст для написания **корректного** Melonity-скрипта с первого раза, без переписываний из-за вымышленных API-имён.

## Аргументы

Пользователь передаёт один из:
- **Имя героя** (`pudge`, `invoker`, `ember_spirit`, `templar_assasin`) → комбо-скрипт
- **Feature name** (`esp_wards`, `auto_accept`, `range_indicator`, `last_hit`) → non-hero feature
- Свободное описание — уточни у пользователя тип, прежде чем генерировать.

## Алгоритм работы

### Шаг 1. Прочитай спеку поведения

1. Для героя → `melonity_info/heroes.md` (найди секцию по имени + прочитай `common_combo_pattern.md`)
2. Для фичи → `melonity_info/features.md` (секция по имени фичи)
3. Для любого — посмотри existing recipe/example — может уже есть готовый:
   - `melonity_info/recipes/*.md` — рецепты с анализом
   - `melonity_info/examples/*.ts` — готовые скелеты

### Шаг 2. Проверь API-имена перед написанием кода

**ВСЕГДА** перед использованием нетривиального API-имени — grep по `template-custom-scripts-main/declarations/*.d.ts`. Особенно эти:

| Неверно (распространённая ошибка) | Верно | Декларация |
|---|---|---|
| `Input.GetCursorWorldPosition()` | `Input.GetWorldCursorPos()` | `input.d.ts:25` |
| `Input.GetCursorX()` / `GetCursorY()` | `Input.GetCursorPos()` → `[x, y]` | `input.d.ts:3` |
| `Engine.GetGameTime()` | `GameRules.GetGameTime()` | `game_rules.d.ts:58` |
| `Vector.Subtract(v)` | `Vector.sub(v)` (lowercase!) | `vector.d.ts:44` |
| `Vector.Multiply(f)` | `Vector.Scaled(f)` (для скаляра) или `Vector.mul(v)` (для вектора) | `vector.d.ts:52,75` |
| `Engine.GetPing()` | **НЕ СУЩЕСТВУЕТ** — используй ручную настройку | — |
| `Renderer.DrawText(vec, text, color, font)` | `Renderer.DrawText(font, x, y, text)` | `renderer.d.ts` |

**Vector API** — смесь регистров, легко ошибиться:
- **Lowercase**: `sub`, `add`, `mul`, `div` (возвращают новый Vector)
- **PascalCase**: `Scaled(f)`, `Normalized()`, `Dot(v)`, `Length()`, `Length2D()`, `Distance(v)`, `Rotated(angle)`, `Clone()`, `ToVector2()`
- **In-place** (изменяют this, возвращают void): `Scale`, `Normalize`, `Normalize2D`, `Rotate`

**Color** — `Color.WHITE`, `Color.BLACK`, `Color.RED`, `Color.GREEN`, `Color.BLUE`, `Color.YELLOW`, `Color.CYAN`, `Color.MAGENTA`, `Color.TRANSPARENT` (все `static readonly`) + `new Color(r, g, b, a)`.

### Шаг 3. Используй правильный скелет

**Базовая форма** (используется всеми скриптами):

```typescript
/// <reference path="../declarations/callbacks.d.ts" />

let MyScript: ScriptDescription = {};

namespace myScript {
    const PATH = ['Category', 'Feature Name'];  // путь в меню чита

    // ========== Menu ==========

    const masterOpt = Menu.AddToggle(PATH, 'Enable', true).SetGeneral(true);
    // .SetGeneral(true) — делает эту опцию главным toggle'ом раздела

    const masterVal = masterOpt.GetBindedValue();
    // GetBindedValue() возвращает прокси { value: T }, автообновляется — ПРЕДПОЧИТАЙ этому GetValue()

    // ========== Ресурсы ==========

    let font: Font | null = null;

    // ========== Callbacks ==========

    // Local state — EntitySystem.GetLocalHero/Player() кэшируем при Create-колбэке.
    // Глобальных `LocalHero`/`LocalPlayer` в API НЕТ. Идиома из prod bundle:
    let me: Hero | null = null;
    let myPlayer: Player | null = null;
    function refreshLocals() {
        me = EntitySystem.GetLocalHero();
        myPlayer = EntitySystem.GetLocalPlayer();
    }
    MyScript.OnLocalHeroCreate = () => refreshLocals();
    MyScript.OnLocalHeroDestroy = () => { me = null; };
    MyScript.OnLocalPlayerCreate = () => refreshLocals();
    MyScript.OnLocalPlayerDestroy = () => { myPlayer = null; };

    MyScript.OnScriptLoad = () => {
        font = Renderer.LoadFont('Radiance', 14, Enum.FontWeight.BOLD, Enum.FontFlags.OUTLINE);
        // LoadFont ТОЛЬКО в OnScriptLoad — не создавай шрифт каждый кадр в OnDraw
        refreshLocals();  // hot-reload посреди матча: Create-колбэки не сработают, вызывай вручную
    };

    MyScript.OnScriptUnload = () => {
        font = null;  // обнули ссылки на ресурсы
    };

    MyScript.OnUpdate = () => {
        if(!masterVal.value) return;
        if(!me || !me.IsAlive()) return;
        // Throttle — OnUpdate зовётся ~30 Hz, тикай реже если не нужен каждый кадр
        if(!Engine.OnceAtByKey(0.05, 'MyScript.Tick', true)) return;
        // ... логика
    };

    MyScript.OnDraw = () => {
        if(!masterVal.value || !font) return;
        // Рисование ТОЛЬКО тут. Renderer.Draw* в OnUpdate ничего не нарисует!
    };

    RegisterScript(MyScript, 'My Feature');  // ОБЯЗАТЕЛЬНАЯ строка — без неё скрипт не зарегистрируется
}
```

### Шаг 4. Для комбо-героя — возьми `examples/pudge_combo.ts` как референс

Путь: `melonity_info/examples/pudge_combo.ts`. Там реализовано:
- Проверка `isOwnHero()` (`LocalHero.GetUnitName() === HERO_NAME`)
- `findBestTarget()` через `EntitySystem.GetHeroesList()` с фильтрами
- `tryBreakSphere()` — линка + лотус сначала, потом всё остальное
- `castOrderedAbilities/Items()` по `GetBehavior()` битмаске
- `invisHit` — первый удар с инвиза до комбо
- `OnPrepareUnitOrders` — блокирует ATTACK_TARGET/ATTACK_MOVE игрока во время комбо
- `hit & run` — `PrepareUnitOrdersStructed` с `MOVE_TO_POSITION` на курсор

Для нового героя: меняй `HERO_NAME`, `ABILITY_NAMES`, `ITEM_NAMES`, `SPHERE_BREAK_NAMES`, `PATH`. Добавь геро-специфичную логику (invoke-sequence, sunder, ремора и т.п.) в `OnUpdate` после `findBestTarget()`, до базовых cast-хелперов.

## Чек-лист перед выдачей файла

- [ ] Все API-имена проверены grep'ом по `declarations/` (минимум — `Vector.sub` а не `Subtract`, `GameRules.GetGameTime`, `Input.GetWorldCursorPos`)
- [ ] `RegisterScript(MyScript, 'Name')` есть в конце namespace
- [ ] `OnScriptLoad` создаёт ресурсы, `OnScriptUnload` обнуляет
- [ ] `OnUpdate` имеет `Engine.OnceAtByKey` для троттлинга
- [ ] `OnDraw` — только `Renderer.*` вызовы, не логика
- [ ] `me`/`myPlayer` кэшируются через `EntitySystem.GetLocalHero()` в `OnLocalHero*` колбэках — глобальных `LocalHero`/`LocalPlayer` НЕТ
- [ ] `if(!me)` / `if(!me.IsAlive())` проверки перед `me.*`
- [ ] `IsExist()` проверяется перед чтением MemoryAccessor (Projectile, Modifier, Entity) на случай уничтожения между кадрами
- [ ] Для items/abilities используется `CanBeExecuted()`, не `CanCast()` (учитывает больше условий)
- [ ] `GetBindedValue()` используется для часто-читаемых опций, а не `GetValue()` в каждом тике
- [ ] `SetGeneral(true)` на master-toggle раздела
- [ ] Нет захардкоженных дистанций/уронов — используй `GetCastRange()`, `GetAOERadius()`, `GetLevelSpecialValueFor('key')`
- [ ] Если скрипт реактивный (auto-dodge, kill-stealer) — предупреди в комментариях про задержку Humanizer (+50–200мс)

## Частые ловушки

1. **`Menu.AddToggle` в модульном scope при hot-reload** → дубликаты опций. Melonity обычно чистит при unload, но если нет — явный `.RemoveOption()` в `OnScriptUnload`.
2. **Кэш Entity в `OnScriptLoad`** → null после респа. Используй `OnEntityCreate` или ищи каждый тик.
3. **`for(const x of EntitySystem.GetHeroesList())` и мутация списка** → UB. EntitySystem возвращает **live reference** — только чтение.
4. **Font, созданный до hot-reload** → невалиден, DrawText крашит. Пересоздавай в `OnScriptLoad`.
5. **`OnFireEvent` в Safe Mode** → движок не присылает события. Используй `OnModifierCreate`/`OnEntityCreate` как fallback. См. `melonity_info/safe_mode.md`.
6. **Блокирование `OnPrepareUnitOrders` return true в Safe Mode** → игнорируется. Проектируй так, чтобы блок был улучшением, не critical path.
7. **`OnPrepareUnitOrders` без фильтра `order.npc !== me`** → режет команды по курам/медведю LD.
8. **`behavior & (1 << 2)` для `AbilityBehavior`** — значения сдвинуты И тип bigint. Правильно: `(spell.GetBehavior() & Enum.AbilityBehavior.DOTA_ABILITY_BEHAVIOR_UNIT_TARGET) !== 0n`. Канонические сдвиги: `NO_TARGET = 1n<<2n`, `UNIT_TARGET = 1n<<3n`, `POINT = 1n<<4n`.
9. **`GetMana`/`GetModifiers`/`HasState` на `Entity`** — эти методы начинаются с `NPC` класса (Entity → ModelEntity → NPC → Hero). Type-check поймает; в сигнатурах helper'ов пиши `NPC`, не `Entity`.
10. **`item.IsRequireCharges()`/`GetCurrentCharges()`** — только на `Item`, не на `Ability`. Нужен cast: `(spell as Item).IsRequireCharges()`.

## Документация для углублённой работы

| Файл | Когда читать |
|---|---|
| `melonity_info/api_deep_dives/menu.md` | Нужен кастомный UI, priority select, locale, tabs |
| `melonity_info/api_deep_dives/entity.md` | Поиск/фильтрация юнитов, работа с Modifier, MemoryAccessor |
| `melonity_info/api_deep_dives/renderer.md` | Мировые круги, шрифты, Image/Texture, WorldToScreen |
| `melonity_info/api_deep_dives/orders.md` | `PrepareUnitOrders*`, `OnPrepareUnitOrders`, полный `UnitOrder` enum |
| `melonity_info/api_deep_dives/netmessages.md` | GC, auto-accept, анти-репорт, ESP через паки |
| `melonity_info/lifecycle.md` | Порядок колбэков, фазы, троттлинг |
| `melonity_info/safe_mode.md` | Что работает/нет в Safe Mode |
| `template-custom-scripts-main/declarations/*.d.ts` | Исходник правды — всегда grep первым делом |

## Формат выдачи

Создай новый файл в `template-custom-scripts-main/src/<name>.ts` (или в `melonity_info/examples/` если пользователь просит пример). Webpack подхватит его автоматически (entry — `./src/*.ts` glob).

После создания — напомни пользователю:
```bash
cd template-custom-scripts-main
npx tsc --noEmit            # type-check
npm run watch               # webpack build
# dist/<name>.js → папка скриптов Melonity → Reload Scripts в меню
```

Или предложи вызвать скилл `/melonity-build-check` для автоматической проверки.
