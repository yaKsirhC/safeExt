const s = document.createElement('script');
s.src = chrome.runtime.getURL('ytb-download.js');

s.setAttribute('defer', '')
document.head.appendChild(s)