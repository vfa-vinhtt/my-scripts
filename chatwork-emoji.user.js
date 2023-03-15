// ==UserScript==
// @name        Chatwork Emoji
// @namespace   vinhtt_scripts
// @match       https://www.chatwork.com/*
// @grant       none
// @version     1.4
// @author      VinhTT
// @description 2023-03
// ==/UserScript==
(() => {
  const MY_EMOJI_LIST = [
    '[preview id=1160628178 ht=150]',
    '[preview id=1160627105 ht=135]',
    '[preview id=1160627392 ht=111]',
    '[preview id=1160627610 ht=144]',
    '[preview id=1160627812 ht=133]',
    '[preview id=1160628005 ht=108]',
    '[preview id=1160628325 ht=150]',
    '[preview id=1160629433 ht=109]',
    '[preview id=1160629434 ht=120]',
    '[preview id=1160631924 ht=98]',
    '[preview id=1160629497 ht=139]',
    '[preview id=1160572428 ht=140]',
    '[preview id=1160575045 ht=150]',
    '[preview id=1160599877 ht=150]',
    '[preview id=1160658338 ht=110]',
    '[preview id=1160635453 ht=76]',
    '[preview id=1160635454 ht=70]',
    '[preview id=1161042549 ht=150]',
    '[preview id=1161049907 ht=50]',
    '[preview id=1161050283 ht=136]',
    '[preview id=1161053627 ht=100]',
  ];

  const MY_EMOJI = function (retry = 5) {
    const elmEmoticonGallery = document.querySelector('#_emoticonGallery');
    if (elmEmoticonGallery) {
      try {
        const emojHtml = MY_EMOJI_LIST.map((text) => {
          const id = text.split('id=')[1].split(' ')[0];
          const src = `https://www.chatwork.com/gateway/preview_file.php?bin=1&preview=1&file_id=${id}`;
          return `<li class="emoticonTooltip__emoticonContainer"><img src="${src}" class="emoticonTooltip__emoticon" title="${text}" alt="${text}"></li>`;
        }).join('');
        elmEmoticonGallery.insertAdjacentHTML('beforeend', emojHtml);
      } catch (error) {
        console.log(error);
      }
    } else if (retry > 0) {
      setTimeout(() => MY_EMOJI(retry - 1), 1000);
    }
  };

  MY_EMOJI(10);
})();
