// ==UserScript==
// @name        Chatwork Emoji
// @namespace   vinhtt_scripts
// @match       https://www.chatwork.com/*
// @grant       none
// @version     1.19
// @author      VinhTT
// @description 2023-03
// @icon        https://raw.githubusercontent.com/vfa-vinhtt/my-scripts/main/assets/chatwork-emoji.png
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==

(() => {
  const ICON_RABBIT = [
    1160628178, 1160627105, 1160627392, 1160627610, 1160627812, 1160628005, 1160628325, 1160629433, 1160629434,
    1160631924, 1160635453, 1160635454, 1162396515, 1162173851, 1163352074,
  ];

  const ICON_BEAR = [1161042549, 1161050283, 1161053627, 1162216126];

  const ICON_SUMO = [
    1160629497, 1161544568, 1161544566, 1161544565, 1161544564, 1161544563, 1161544562, 1161544561, 1161544560,
    1161544559, 1161544558, 1161544557, 1161544556, 1161544555, 1161544554, 1161544553, 1162216492, 1165075904,
    1165075905, 1165075904, 1165075903,
  ];

  const ICON_ONION = [
    1161443888, 1161542199, 1161542198, 1161542197, 1161542196, 1162198310, 1162206850, 1162215140, 1162229901,
    1162232130, 1162348407, 1162362026, 1162383253, 1162397407, 1162419716, 1162457846, 1162457845, 1162457844,
    1162457843, 1162457842, 1162457841, 1162457840, 1162457839, 1162457838,
  ];

  const ICON_DRAGON = [
    1163368778, 1163368777, 1163368776, 1163368775, 1163368773, 1163368772, 1163368771, 1163368769, 1163368768,
    1163368767, 1163368766, 1163368765, 1163368764, 1163368763, 1163368762, 1163368761, 1163368760, 1163368759,
    1163368758,
  ];

  const ICON_OTHER = [1161049907, 1164633470, 1164635029];

  const MY_EMOJI_LIST = [...ICON_RABBIT, ...ICON_SUMO, ...ICON_ONION, ...ICON_DRAGON, ...ICON_BEAR, ...ICON_OTHER];

  const FIND_AND_APPEND_ICON = (selector) => {
    const disconnect = VM.observe(document.body, () => {
      const targetNode = document.querySelector(selector);
      if (targetNode) {
        try {
          const emojHtml = MY_EMOJI_LIST.map((id) => {
            const preview = `[preview id=${id} ht=70]`;
            const src = `https://www.chatwork.com/gateway/preview_file.php?bin=1&preview=1&file_id=${id}`;
            return `<li class="emoticonTooltip__emoticonContainer"><img src="${src}" class="emoticonTooltip__emoticon" title="${id}" alt="${preview}"></li>`;
          }).join('');
          targetNode.insertAdjacentHTML('beforeend', emojHtml);
          // update max-height + show scroll
          targetNode.setAttribute('style', `width:270px;max-height:400px;overflow-x:auto;padding:0;`);
        } catch (error) {
          console.log(error);
        }
        disconnect();
        return true;
      }
    });
  };

  FIND_AND_APPEND_ICON('#_emoticonGallery');
  FIND_AND_APPEND_ICON('#_emoticonGalleryFileUpload');
})();
