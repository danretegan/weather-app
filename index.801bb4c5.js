var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequirebbde;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequirebbde=i),i.register;var n=i("gfxvS");const a=document.querySelector("form"),s=document.querySelector(".card"),l=document.querySelector(".details"),o=document.querySelector("img.time"),c=document.querySelector(".icon img"),d=e=>{let{cityDetails:t,weather:r}=e;console.log(e),l.innerHTML=`
  <h5 class="my-3">${t.LocalizedName}</h5>
  <h6>${t.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${r.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${r.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;let i=`images/icons/${r.WeatherIcon}.svg`;c.setAttribute("src",i);let n=null;n=r.IsDayTime?"images/day.svg":"images/night.svg",o.setAttribute("src",n),s.classList.contains("d-none")&&s.classList.remove("d-none")},u=async e=>{let t=await (0,n.getCity)(e),r=await (0,n.getWeather)(t.Key);return{cityDetails:t,weather:r}};a.addEventListener("submit",e=>{e.preventDefault();let t=a.elements.cityInput.value.trim();a.reset(),u(t).then(e=>d(e)).catch(e=>console.log(e))});
//# sourceMappingURL=index.801bb4c5.js.map
