![Astro Logo](https://st.timeweb.com/cloud-static/apps-logo/astro.svg)

# Astro SSR

Пример приложения [Astro](https://astro.build/) с серверным рендерингом (SSR), которое можно развернуть в **Timeweb Cloud Apps** без настройки.

:tada: [Демо]

:rocket: [Создать свой Apps](https://timeweb.cloud/my/apps/create)

:books: [Документация Timeweb Cloud Apps](https://timeweb.cloud/docs/apps)

## Параметры деплоя

При создании приложения включите поддержку SSR — оно развернётся как backend на Node.js.

| Параметр       | Значение                       |
| -------------- | ------------------------------ |
| Фреймворк      | Astro, SSR включён             |
| Команда сборки | `npm run build`                |
| Команда запуска | `node ./dist/server/entry.mjs` |

Сервер собирается адаптером [`@astrojs/node`](https://docs.astro.build/en/guides/integrations-guide/node/) в режиме `standalone` и слушает `0.0.0.0` (`server.host: true` в `astro.config.mjs`). Порт по умолчанию — `4321`, его можно изменить переменной окружения `PORT`.

Статическая версия — [app-example-astro](https://github.com/timeweb-cloud-apps/app-example-astro).

## Что показывает пример

- `/` — страница рендерится на сервере при каждом запросе: время рендера, версия Node.js и `User-Agent` уже подставлены в HTML.
- `/about` — вторая страница приложения.
- `/api/hello` — API-эндпоинт, отдаёт JSON.

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
npm install

# запуск в дев режиме с отслеживанием изменений
npm run dev

# сборка для продакшн
npm run build

# запуск собранного приложения
npm run start
```

Для работы нужен Node.js 22.12 или новее.
