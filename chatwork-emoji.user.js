// ==UserScript==
// @name        Chatwork Emoji
// @namespace   vinhtt_scripts
// @match       https://www.chatwork.com/*
// @grant       none
// @version     1.11
// @author      VinhTT
// @description 2023-03
// @icon        https://raw.githubusercontent.com/vfa-vinhtt/my-scripts/main/assets/chatwork-emoji.png
// ==/UserScript==

(() => {

  const MY_EMOJI_RABBIT = [
    1160628178, 1160627105, 1160627392, 1160627610, 1160627812, 1160628005, 1160628325, 1160629433, 1160629434,
    1160631924, 1160635453, 1160635454, 1162396515,
  ];

  const MY_EMOJI_BEAR = [1161042549, 1161050283, 1161053627, 1162216126];

  const MY_EMOJI_SUMO = [
    1160629497, 1160572428, 1160575045, 1160599877, 1160658338, 1161544568, 1161544566, 1161544565, 1161544564,
    1161544563, 1161544562, 1161544561, 1161544560, 1161544559, 1161544558, 1161544557, 1161544556, 1161544555,
    1161544554, 1161544553, 1162216492,
  ];

  const MY_EMOJI_ONION = [
    1161443888, 1161542199, 1161542198, 1161542197, 1161542196, 1162198310, 1162206850, 1162215140, 1162229901,
    1162232130, 1162348407, 1162362026, 1162383253, 1162397407, 1162419716, 1162457846, 1162457845, 1162457844,
    1162457843, 1162457842, 1162457841, 1162457840, 1162457839, 1162457838,
  ];

  const MY_EMOJI_OTHER = [1161049907];

  const MY_EMOJI_LIST = [...MY_EMOJI_RABBIT, ...MY_EMOJI_SUMO, ...MY_EMOJI_ONION, ...MY_EMOJI_BEAR, ...MY_EMOJI_OTHER];

  const MY_EMOJI = function (retry = 5) {
    const elmEmoticonGallery = document.querySelector('#_emoticonGallery');
    if (elmEmoticonGallery) {
      try {
        const emojHtml = MY_EMOJI_LIST.map((id) => {
          const preview = `[preview id=${id} ht=70]`;
          const src = `https://www.chatwork.com/gateway/preview_file.php?bin=1&preview=1&file_id=${id}`;
          return `<li class="emoticonTooltip__emoticonContainer"><img src="${src}" class="emoticonTooltip__emoticon" title="${id}" alt="${preview}"></li>`;
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
