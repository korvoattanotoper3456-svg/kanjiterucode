# Personal Site

Статический личный сайт без сборки и без платного хостинга.

## Что внутри

- `index.html` — структура страницы
- `styles.css` — вся визуальная часть
- `script.js` — переключение палитры и анимации появления
- `package.json` — команды для локального preview и деплоя
- `preview-local.ps1` — локальный запуск на `http://127.0.0.1:4173`
- `deploy-cloudflare.ps1` — публикация в Cloudflare Pages одной командой

## Как выложить бесплатно

### Вариант 1: GitHub Pages

1. Создай новый GitHub-репозиторий.
2. Залей туда `index.html`, `styles.css`, `script.js`.
3. В репозитории открой `Settings` -> `Pages`.
4. В `Build and deployment` выбери `Deploy from a branch`.
5. Выбери ветку `main` и папку `/root`.
6. Через минуту сайт появится на адресе вида `https://username.github.io/repo-name/`.

### Вариант 2: Cloudflare Pages

1. Авторизуй `wrangler`.
2. Запусти `./deploy-cloudflare.ps1`
3. Или выполни `npm run deploy:cloudflare`
4. После первого деплоя сайт будет доступен на адресе вида `https://kanjiteru-site.pages.dev`

### Локальный preview

1. Запусти `./preview-local.ps1`
2. Открой `http://127.0.0.1:4173`

### Если `wrangler login` ломается на localhost

Попробуй так:

```powershell
wrangler login --browser=false --callback-host 127.0.0.1 --callback-port 8977
```

Если и это не помогает, самый надежный запасной путь:

1. Открыть Cloudflare Dashboard вручную
2. Создать проект `kanjiteru-site` в `Workers & Pages`
3. Залить папку через web UI или после обычного логина в `wrangler`

## Про домен `.zxc`

По состоянию на 23 апреля 2026 года `.zxc` не делегирован как настоящий TLD в корневой зоне IANA, поэтому зарегистрировать реальный домен формата `имя.zxc` нельзя.

Если нужна именно бесплатная публикация прямо сейчас, используй:

- адрес от GitHub Pages
- адрес от Cloudflare Pages

Если захочешь, следующим сообщением я могу:

1. сразу заменить тексты на твои реальные контакты и ник
2. подготовить сайт под GitHub Pages с корректным `base path`
3. сделать вторую, более агрессивную визуальную версию
