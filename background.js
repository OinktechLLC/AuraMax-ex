chrome.runtime.onInstalled.addListener(() => {
  console.log('✅ AuraMAX v1.1 установлено! Полная защита от web.max.ru активна.');
});

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  console.log('🚫 AuraMAX заблокировал:', info.request.url);
});
