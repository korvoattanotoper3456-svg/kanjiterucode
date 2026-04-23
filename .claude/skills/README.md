# Skills — проект-специфичные slash-команды

5 скиллов для работы с Melonity-скриптами. Вызывай через `/<skill-name>` в Claude Code.

| Скилл | Назначение |
|---|---|
| [`/melonity-new-script`](melonity-new-script/SKILL.md) | **Главный** — пишет новый .ts-скрипт с правильным API с первого раза |
| [`/melonity-verify-api`](melonity-verify-api/SKILL.md) | Проверяет, существует ли символ в `declarations/*.d.ts` |
| [`/melonity-build-check`](melonity-build-check/SKILL.md) | Прогоняет tsc + webpack, репортит ошибки с hint'ами |
| [`/melonity-recipe`](melonity-recipe/SKILL.md) | Создаёт новый recipe-документ + парный `.ts` в examples/ |
| [`/melonity-test-harness`](melonity-test-harness/SKILL.md) | Добавляет jest unit-тест поверх `examples/test_harness.ts` |

## Типичные workflow

### Написать нового героя
```
/melonity-new-script pudge
→ создаёт src/pudge_combo.ts с проверенным API
/melonity-build-check pudge_combo
→ tsc + webpack, подтверждает чистоту
```

### Добавить новую фичу с документом
```
/melonity-recipe auto_snatcher — перехват рун
→ создаёт recipes/auto_snatcher.md + examples/auto_snatcher.ts
/melonity-test-harness auto_snatcher
→ добавляет jest-тест
```

### Отладка подозрительного API
```
/melonity-verify-api Engine.GetGameTime, Input.GetCursorX
→ ❌ обе не существуют, подсказывает правильные имена
```

## Почему именно эти 5

Эти скиллы покрывают цикл «идея → документ → код → проверка → тест» который был выполнен в прошлых сессиях вручную. Главный — `/melonity-new-script`: содержит полный свод проверенных API-имён и паттернов, чтобы Claude не изобретал `Input.GetCursorWorldPosition()` заново.
