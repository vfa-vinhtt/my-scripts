// ==UserScript==
// @name        Chatwork Emoji
// @namespace   vinhtt_scripts
// @match       https://www.chatwork.com/*
// @grant       none
// @version     1.8
// @author      VinhTT
// @description 2023-03
// @icon        https://raw.githubusercontent.com/vfa-vinhtt/my-scripts/main/assets/chatwork-emoji.png
// ==/UserScript==

(() => {
  const MY_EMOJI_RABBIT = [
    '[preview id=1160628178 ht=70]',
    '[preview id=1160627105 ht=70]',
    '[preview id=1160627392 ht=70]',
    '[preview id=1160627610 ht=70]',
    '[preview id=1160627812 ht=70]',
    '[preview id=1160628005 ht=70]',
    '[preview id=1160628325 ht=70]',
    '[preview id=1160629433 ht=70]',
    '[preview id=1160629434 ht=70]',
    '[preview id=1160631924 ht=70]',
    '[preview id=1160635453 ht=70]',
    '[preview id=1160635454 ht=70]',
  ];
  const MY_EMOJI_BEAR = [
    '[preview id=1161042549 ht=70]',
    '[preview id=1161050283 ht=70]',
    '[preview id=1161053627 ht=70]',
    '[preview id=1162216126 ht=70]',
  ];
  const MY_EMOJI_SUMO = [
    '[preview id=1160629497 ht=70]',
    '[preview id=1160572428 ht=70]',
    '[preview id=1160575045 ht=70]',
    '[preview id=1160599877 ht=70]',
    '[preview id=1160658338 ht=70]',
    '[preview id=1161544568 ht=70]',
    '[preview id=1161544566 ht=70]',
    '[preview id=1161544565 ht=70]',
    '[preview id=1161544564 ht=70]',
    '[preview id=1161544563 ht=70]',
    '[preview id=1161544562 ht=70]',
    '[preview id=1161544561 ht=70]',
    '[preview id=1161544560 ht=70]',
    '[preview id=1161544559 ht=70]',
    '[preview id=1161544558 ht=70]',
    '[preview id=1161544557 ht=70]',
    '[preview id=1161544556 ht=70]',
    '[preview id=1161544555 ht=70]',
    '[preview id=1161544554 ht=70]',
    '[preview id=1161544553 ht=70]',
    '[preview id=1162216492 ht=70]',
  ];
  const MY_EMOJI_ONION = [
    '[preview id=1161443888 ht=70]',
    '[preview id=1161542199 ht=70]',
    '[preview id=1161542198 ht=70]',
    '[preview id=1161542197 ht=70]',
    '[preview id=1161542196 ht=70]',
    '[preview id=1162198310 ht=70]',
    '[preview id=1162206850 ht=70]',
    '[preview id=1162215140 ht=70]',
    '[preview id=1162229901 ht=70]',
    '[preview id=1162232130 ht=70]',
    '[preview id=1162348407 ht=70]',
    '[preview id=1162362026 ht=70]',
  ];
  const MY_EMOJI_OTHER = [
    '[preview id=1161049907 ht=50]',
  ];

  const MY_EMOJI_LIST = [
    ...MY_EMOJI_RABBIT,
    ...MY_EMOJI_SUMO,
    ...MY_EMOJI_ONION,
    ...MY_EMOJI_BEAR,
    ...MY_EMOJI_OTHER
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
