---
name: melonity-build-check
description: Прогоняет 3 уровня верификации Melonity-скрипта — tsc --noEmit, webpack build, выводит сводку ошибок с навигацией.
---

# Скилл — build & type-check

Автоматизирует циклы 1-3 из `melonity_info/testing.md`: TypeScript type-check → webpack build → краткий отчёт.

## Pre-flight (один раз)

```bash
[ -d template-custom-scripts-main/node_modules ] || \
  (cd template-custom-scripts-main && npm install)
```

Если `node_modules` нет — запусти install. ~213 пакетов, ~5 секунд с кэшем npm.

## Новый скрипт — копирование в src/

Скрипты пишем в `melonity_info/examples/`. Для билда копируем в `src/`:

```bash
cp melonity_info/examples/<name>.ts template-custom-scripts-main/src/<name>.ts
```

`webpack.config.js` автоматически подхватит через glob `./src/*.ts`.


## Аргументы

Опционально — имя скрипта (`pudge_combo`, `auto_dodge`). Без аргументов проверяется вся папка `src/`.

## Алгоритм

### Level 1 — TypeScript type-check

```bash
cd c:/Users/user/Desktop/ScriptsMelonity/template-custom-scripts-main
npx tsc --noEmit
```

Ловит:
- Опечатки в API-именах (`GetGameTime` без namespace → ошибка)
- Неверные типы аргументов
- Несуществующие поля на классах
- Несуществующие enum-члены

**Не ловит**: логические баги, неверный порядок вызовов, runtime null-доступы.

### Level 2 — webpack build

```bash
cd c:/Users/user/Desktop/ScriptsMelonity/template-custom-scripts-main
npx webpack
```

Ловит:
- Import-ошибки
- Circular dependencies
- `fork-ts-checker` предупреждения
- Проблемы с entry-глобом (файл должен лежать в `src/*.ts`)

После успеха → `dist/<name>.js` должен появиться и быть ненулевым.

### Level 3 (опционально) — Jest harness

Если в `test/` есть `*.test.ts`:

```bash
cd c:/Users/user/Desktop/ScriptsMelonity/template-custom-scripts-main
npx jest
```

## Формат вывода

### Если всё чисто

```
✅ Type-check: 0 errors
✅ Webpack build: dist/pudge_combo.js (14.2 KB)
✅ Tests: 8 passed (если Jest сконфигурирован)

Следующий шаг: скопируй dist/*.js в папку скриптов Melonity и вызови "Reload Scripts" в меню чита.
```

### Если есть ошибки

Покажи первые 5 ошибок с контекстом:

```
❌ Type-check: 3 errors

src/pudge_combo.ts:142:23 - error TS2339: Property 'GetGameTime' does not exist on type 'typeof Engine'.
  142     lastAttackTime = Engine.GetGameTime();
                                  ~~~~~~~~~~~
  Hint: это частая ошибка — используй GameRules.GetGameTime() (см. /melonity-verify-api)

src/auto_dodge.ts:78:41 - error TS2339: Property 'Subtract' does not exist on type 'Vector'.
  ...
```

Для каждой ошибки старайся давать **hint** из таблицы частых ошибок (см. `/melonity-verify-api`).

## Типичные проблемы и фиксы

| Сообщение webpack | Что делать |
|---|---|
| `Entry module not found: ./src/*.ts` | Файл должен лежать непосредственно в `src/`, подпапки не подхватываются дефолтным конфигом |
| `Cannot find name 'ScriptDescription'` | Забыл `/// <reference path="../declarations/callbacks.d.ts" />` или нет `@types` в tsconfig |
| `Module not found: humanizer` / `panorama` | Нет соответствующего .d.ts — либо добавь reference-строку, либо удали использование |
| Infinite loop / memory leak в watch | Есть OnUpdate который пишет в файл / создаёт ресурс — убери из hot-path |

## Автоисправления

Если видишь **только** ошибки из таблицы `/melonity-verify-api` (типа `Engine.GetGameTime` → `GameRules.GetGameTime`) — предложи пользователю фикс через `Edit` и, с его согласия, примени.

Не применяй автоматически — это работа `/melonity-new-script` делать правильно с первого раза.

## Таймауты

- `tsc --noEmit` обычно < 2 сек. Если > 10 сек — возможна проблема с tsconfig или огромным проектом.
- `webpack` обычно < 5 сек в dev, до 30 сек в production-режиме.
- Если watch-режим — НЕ вызывай `npm run watch` тут, он не завершится. Используй разовый `npx webpack`.

## Связанные скиллы

- `/melonity-verify-api` — проверить отдельный символ
- `/melonity-new-script` — если ошибок слишком много и проще переписать
