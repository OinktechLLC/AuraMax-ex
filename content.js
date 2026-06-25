// Блокируем установку и чтение куки для max.ru
Object.defineProperty(document, 'cookie', {
  get: function() { return ''; },
  set: function() { console.log('🚫 AuraMAX: Попытка установки cookie заблокирована'); }
});

// Дополнительно: перехватываем запросы
const originalFetch = window.fetch;
window.fetch = function(url, options) {
  if (url && (url.includes('web.max.ru') || url.includes('max.ru'))) {
    console.log('🚫 AuraMAX: fetch-запрос к MAX заблокирован:', url);
    return Promise.reject('Blocked by AuraMAX');
  }
  return originalFetch.apply(this, arguments);
};

const originalXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
  const xhr = new originalXHR();
  const originalOpen = xhr.open;
  xhr.open = function(method, url) {
    if (url && (url.includes('web.max.ru') || url.includes('max.ru'))) {
      console.log('🚫 AuraMAX: XHR-запрос к MAX заблокирован:', url);
      throw new Error('Blocked by AuraMAX');
    }
    return originalOpen.apply(this, arguments);
  };
  return xhr;
};

console.log('🔒 AuraMAX content script активен на web.max.ru');