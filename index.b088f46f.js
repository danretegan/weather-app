var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequirebbde;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequirebbde=i);var r=i("gfxvS");const s=document.querySelector("form"),a=document.querySelector(".card"),o=document.querySelector(".details"),l=document.querySelector("img.time"),c=document.querySelector(".icon img");s.addEventListener("submit",(e=>{e.preventDefault();const t=s.elements.cityInput.value.trim();s.reset(),(async e=>{const t=await(0,r.getCity)(e);return{cityDetails:t,weather:await(0,r.getWeather)(t.Key)}})(t).then((e=>(e=>{const{cityDetails:t,weather:n}=e;console.log(e),o.innerHTML=`\n  <h5 class="my-3">${t.LocalizedName}</h5>\n  <h6>${t.AdministrativeArea.LocalizedName}</h6>\n  <div class="my-3">${n.WeatherText}</div>\n  <div class="display-4 my-4">\n    <span>${n.Temperature.Metric.Value}</span>\n    <span>&deg;C</span>\n  </div>\n  `;
//! update the night/day & icon images:
const i=`./images/icons/${n.WeatherIcon}.svg`;c.setAttribute("src",i);let r=null;r=n.IsDayTime?"./images/day.svg":"./images/night.svg",l.setAttribute("src",r),a.classList.contains("d-none")&&a.classList.remove("d-none")})(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.b088f46f.js.map
