# FamilyTalk
FamilyTalk — единый нативный Family Chat проект: Android-приложение, сервер и кодовые основы для будущих нативных клиентов iOS/Windows.

## Состав проекта

- `app/` — основной Android-клиент на Kotlin + Jetpack Compose.
- `server/` — Node.js backend с REST API, WebSocket, JWT, PostgreSQL-миграциями, группами, файлами, поддержкой, P2P-сигналингом и админ-модулями.
- `client/common/` — protobuf-контракты сообщений, API, E2EE и P2P.
- `client/ios/` — нативный iOS-код SwiftUI/LocalAuthentication/CoreData.
- `client/windows/` — нативный Windows-клиент Qt6/C++.
- `scripts/`, `docs/`, `deployment/` — запуск, документация и варианты деплоя.

## Ключевые требования

- JWT-сессии рассчитаны на 3 месяца.
- PostgreSQL используется как целевая база данных; миграции лежат в `server/database/migrations/`.
- E2EE проектируется вокруг AES-256-GCM и X25519/Diffie-Hellman.
- Группы ограничиваются интерфейсом до 100 участников.
- Скрытый модератор `@kto_vanya` управляет логами и NVIDIA NIM на сервере.
- P2P использует серверный сигналинг без TURN; при неудаче файл уходит через сервер с удалением временной серверной копии после скачивания.
- Автоудаление удаляет сообщения с сервера, но оставляет локальные копии на устройствах участников.
- Часовые пояса семьи: Москва и Хабаровск.

## Локальная проверка

Android:

```bash
./gradlew :app:lintDebug :app:testDebugUnitTest :app:assembleDebug
```

Server:

```bash
npm install
npm test
npm run lint
npm start
```

Smoke:

```bash
curl http://127.0.0.1:3000/api/health
```
