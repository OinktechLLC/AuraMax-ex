// === Основная защита AuraMAX ===

// 1. Блокировка cookies
Object.defineProperty(document, 'cookie', {
  get: function() { return ''; },
  set: function() { 
    console.log('🚫 AuraMAX: Попытка установки cookie заблокирована для max.ru'); 
  }
});

// 2. Блокировка fetch и XHR
const originalFetch = window.fetch;
window.fetch = function(url, options) {
  if (typeof url === 'string' && (url.includes('web.max.ru') || url.includes('max.ru'))) {
    console.log('🚫 AuraMAX: fetch к MAX заблокирован:', url);
    return Promise.reject(new Error('Blocked by AuraMAX'));
  }
  return originalFetch.apply(this, arguments);
};

const originalXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
  const xhr = new originalXHR();
  const originalOpen = xhr.open;
  xhr.open = function(method, url) {
    if (typeof url === 'string' && (url.includes('web.max.ru') || url.includes('max.ru'))) {
      console.log('🚫 AuraMAX: XHR к MAX заблокирован:', url);
      throw new Error('Blocked by AuraMAX');
    }
    return originalOpen.apply(this, arguments);
  };
  return xhr;
};

// 3. Скрытие рекламы, рекомендаций, каналов и мусора
function hideMAXJunk() {
  // Скрываем рекламные блоки, рекомендации, каналы
  const selectors = [
    // Возможные классы/идентификаторы для рекламы и рекомендаций в MAX
    '[class*="ad"]', '[class*="promo"]', '[class*="recommend"]', '[class*="channel"]',
    '[class*="banner"]', '[class*="sponsor"]', 'div[role="advertisement"]',
    // Более общие
    'section', 'aside', '.feed__sidebar', '.recommendations', '.channels-list',
    // Популярные для мессенджеров
    '[data-testid*="ad"]', '[data-testid*="promo"]'
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (el) {
        el.style.display = 'none';
        el.remove();
        console.log('🧹 AuraMAX: Скрыт элемент', selector);
      }
    });
  });

  // Дополнительно: скрываем боковые панели, топ-бары и т.д.
  const style = document.createElement('style');
  style.textContent = `
    aside, .sidebar, .recommendations-container, 
    .channels, .promo-block, .ad-container { display: none !important; }
    .feed > div:last-child { display: none !important; } /* часто рекомендации внизу */
  `;
  document.head.appendChild(style);
}

// Запускаем сразу и наблюдаем за изменениями страницы (SPA)
hideMAXJunk();
const observer = new MutationObserver(hideMAXJunk);
observer.observe(document.documentElement, { childList: true, subtree: true });

console.log('🔒 AuraMAX v1.1 активен — куки, трекинг и реклама заблокированы!');
