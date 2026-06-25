# OneMAX - Экономия трафика и приватность в браузере

## 📌 О ПРОЕКТЕ

OneMAX — это мощное браузерное расширение для экономии трафика и повышения приватности. 

**Основные возможности:**
- **Сжатие контента**: Автоматическое сжатие изображений, видео, аудио и веб-страниц
- **Блокировка рекламы и трекеров**: Эффективная блокировка ads и trackers
- **VPN и Прокси**: Шифрование трафика, автоматическая смена прокси-серверов
- **Управление фоновым трафиком**: Контроль приложений и скриптов
- **Авто-обновление прокси**: Поиск рабочих прокси на GitHub, Yandex, Google

## 🚀 Установка

1. Скачайте репозиторий
2. Откройте `chrome://extensions/`
3. Включите "Режим разработчика"
4. Нажмите "Загрузить распакованное расширение" и выберите папку OneMAX
5. Готово!

## ✨ Функции

### 1. Сжатие медиа
- Изображения: resize + WebP/AVIF
- Видео: client-side optimization hints
- Страницы: data URIs minimization, lazy loading

### 2. Ad & Tracker Blocker
- Rules-based blocking (declarativeNetRequest)
- Custom filter lists

### 3. Proxy & VPN
- Chrome Proxy API
- Auto-switch on failure
- Free proxy lists from public sources

### 4. Background Traffic Manager
- JS-based control of resource loading

## 🛠 Разработка

- Manifest V3
- Service Worker
- Content Scripts

## 📄 Лицензия
MIT

**Примечание**: Полноценный VPN требует серверной части. Это клиентская реализация с прокси.
