var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequirebbde;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequirebbde=r);var o=r("87QUe");const i=document.querySelector("form");i.addEventListener("submit",(e=>{e.preventDefault();const t=i.elements.cityInput.value.trim();i.reset(),(async e=>{const t=await(0,o.getCity)(e);return{cityDetails:t,weather:await(0,o.getWeather)(t.Key)}})(t).then((e=>console.log(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.24940c27.js.map