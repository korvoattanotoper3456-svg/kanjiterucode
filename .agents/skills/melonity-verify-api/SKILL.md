---
name: melonity-verify-api
description: Проверяет, существует ли указанный Melonity API-символ (функция/класс/enum), показывает точную сигнатуру из declarations/*.d.ts.
---

# Скилл — verify Melonity API

Быстрая проверка символа перед тем, как его использовать в коде. Избавляет от «изобретения» несуществующих функций.

## Аргументы

Одно имя или список через запятую:
- Короткое: `GetGameTime`, `CanBeExecuted`, `AttackTarget`
- С namespace: `Engine.GetRealTime`, `Input.GetWorldCursorPos`
- Класс целиком: `TargetProjectileObject`, `Modifier`

## Алгоритм

### 1. Grep по declarations

```
Grep pattern: <symbol>
path: c:/Users/user/Desktop/ScriptsMelonity/template-custom-scripts-main/declarations
output_mode: content
-n: true
-C: 2
```

### 2. Интерпретируй результаты

- **Найдено в .d.ts** → сигнатура существует. Покажи точный файл:строку + полную JSDoc если есть.
- **Не найдено** → символ не существует в этой версии деклараций. Предложи альтернативы из таблицы «частых ошибок» ниже.
- **Найдено только в .md** → символ из документации, но не в типах. Отдельно пометь: «может существовать в рантайме, но TS не знает — проверь в игре или запроси пользователя».

### 3. Для популярных перепутываний — проверяй обе формы

Если запросили `Engine.GetGameTime`, проверь также `GameRules.GetGameTime` (верный namespace).
Если запросили `Vector.Subtract`, проверь `Vector.sub` (lowercase).
Если запросили `Input.GetCursorWorldPosition`, проверь `Input.GetWorldCursorPos`.

## Карта частых ошибок

| Ошибочно пишут | Верное имя | Источник |
|---|---|---|
| `Engine.GetGameTime()` | `GameRules.GetGameTime()` | `game_rules.d.ts:58` |
| `Input.GetCursorWorldPosition()` | `Input.GetWorldCursorPos()` | `input.d.ts:25` |
| `Input.GetCursorX/Y()` | `Input.GetCursorPos(): [x, y]` | `input.d.ts:3` |
| `Engine.GetPing()` | **не существует** — настройка вручную | — |
| `Vector.Subtract(v)` | `Vector.sub(v)` | `vector.d.ts:44` |
| `Vector.Multiply(f)` (скаляр) | `Vector.Scaled(f)` | `vector.d.ts:75` |
| `Vector.Multiply(v)` (вектор) | `Vector.mul(v)` | `vector.d.ts:52` |
| `Ability.CanCast()` | `Ability.CanBeExecuted()` | `entity.d.ts` (CanCast проверяет меньше) |
| `Renderer.DrawText(vec, text, color, font)` | `Renderer.DrawText(font, x, y, text)` | `renderer.d.ts` |

## Формат ответа

Для каждого запрошенного символа:

```
✅ Engine.GetRealTime
   engine.d.ts:87  function GetRealTime(): number;
   JSDoc: "Returns the current real time in seconds since engine start."

❌ Engine.GetPing
   Не найдено в declarations/. Альтернатив нет — замени на ручную настройку через Menu.AddSlider.

⚠️  Vector.Rotate
   vector.d.ts:157  Rotate(angle: number | Angle): void
   ВНИМАНИЕ: in-place — изменяет this, возвращает void. Для копии используй Rotated().
```

Если символов много — таблицей.

## Связанные скиллы

- `/melonity-new-script` — если после проверки пишешь новый скрипт
- `/melonity-build-check` — проверить после использования
