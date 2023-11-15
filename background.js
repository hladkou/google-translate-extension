chrome.contextMenus.removeAll(() => {
  console.log('Removed menu items');
  chrome.contextMenus.create({
    id: 'translate',
    title: 'Translate selection with Google Translate',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'translate') {
    const text = encodeURI(info.selectionText);
    const textLowerCased = text.toLowerCase();
    const googleTranslateUrl = `https://translate.google.com/?sl=auto&tl=ru&text=${textLowerCased}&op=translate`;

    chrome.windows.create({
      url: googleTranslateUrl,
      //type: 'popup',
      width: 800,
      height: 700
    });
  }
});