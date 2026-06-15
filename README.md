# FamilyTalk
Мессенджер для семьи на Android

## Что уже есть

- Главный экран семейного чата на Jetpack Compose.
- Список членов семьи со статусом онлайн.
- Переключение между диалогами.
- Отправка локальных сообщений из поля ввода.
- Unit-тесты для логики выбора диалога и отправки сообщений.

## Локальный запуск

Требования:

- JDK 17
- Android SDK с `platforms;android-35` и `build-tools;35.0.0`
- Gradle 8.10+

Команды проверки:

```bash
./gradlew :app:lintDebug :app:testDebugUnitTest :app:assembleDebug
```
