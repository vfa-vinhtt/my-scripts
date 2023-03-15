// ==UserScript==
// @name        YouTube - Ads Skip
// @namespace   vinhtt_scripts
// @match       https://*youtube.com/*
// @grant       none
// @version     1.0
// @author      vinhtt
// @description 2023
// ==/UserScript==

(function () {
  setInterval(function () {
    try {
      var overrayAd = document.querySelector('button[class*="-ad-overlay-"]');
      if (overrayAd && overrayAd.click) {
        overrayAd.click();
      }
    } catch (e) {
      console.log("ad-overlay", e);
    }
    try {
      var skipButton = document.querySelector('button[class*="-ad-skip-"]');
      if (skipButton && skipButton.click) {
        skipButton.click();
      }
    } catch (e) {
      console.log("ad-skip", e);
    }
  }, 1500);
})();