(()=>{"use strict";var e={29172:(e,o,n)=>{n.r(o)}},o={};function n(t){var i=o[t];if(void 0!==i)return i.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,n),r.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function e(e){const o=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");const n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(o);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}n(29172),document.addEventListener("DOMContentLoaded",(()=>{const o=e("code"),n=e("state");if(null!=n&&n.includes(":clientId=browser"))!function(e,o){window.postMessage({command:"authResult",code:e,state:o},"*");const n=("; "+document.cookie).split("; ssoHandOffMessage=").pop().split(";").shift();document.cookie="ssoHandOffMessage=;SameSite=strict;max-age=0";const t=document.getElementById("content");t.innerHTML="";const i=document.createElement("p");i.innerText=n,t.appendChild(i)}(o,n);else{window.location.href=window.location.origin+"/#/sso?code="+o+"&state="+n;const e=function(e,o){const n=new RegExp(o).exec(e);if(!n)return null;return n[0]}(n,"(?<=_returnUri=')(.*)(?=')");window.location.href=e?window.location.origin+`/#${e}`:window.location.origin+"/#/sso?code="+o+"&state="+n}}))})()})();
//# sourceMappingURL=sso.d88c527da5ac4ab2e950.js.map