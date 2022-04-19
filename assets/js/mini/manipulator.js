/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Manipulator=e()}(this,(function(){"use strict";function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}return{setDataAttribute(t,o,r){t.setAttribute(`data-bs-${e(o)}`,r)},removeDataAttribute(t,o){t.removeAttribute(`data-bs-${e(o)}`)},getDataAttributes(e){if(!e)return{};const o={};return Object.keys(e.dataset).filter((t=>t.startsWith("bs"))).forEach((r=>{let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),o[n]=t(e.dataset[r])})),o},getDataAttribute:(o,r)=>t(o.getAttribute(`data-bs-${e(r)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})}}));