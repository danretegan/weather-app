function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequirebbde;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequirebbde=o),o.register("87QUe",(function(t,n){e(t.exports,"getWeather",(function(){return o})),e(t.exports,"getCity",(function(){return i}));const r="S7G2LbP0Y0yEFG1MikAzostUxeEZK6Pl",o=async e=>{const t=`${e}?apikey=${r}`,n=await fetch("http://dataservice.accuweather.com/currentconditions/v1/"+t);return(await n.json())[0]},i=async e=>{const t=`?apikey=${r}&q=${e}`,n=await fetch("http://dataservice.accuweather.com/locations/v1/cities/search"+t);return(await n.json())[0]}})),o("87QUe");
//# sourceMappingURL=index.8d795a53.js.map