var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequirebbde;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequirebbde=i),i.register;var a=i("gfxvS");const n=document.querySelector("form"),s=document.querySelector(".card"),o=document.querySelector(".details"),l=document.querySelector("img.time"),c=document.querySelector(".icon img"),d=e=>{let{cityDetails:t,weather:r}=e;console.log(e),o.innerHTML=`
  <h5 class="my-3">${t.LocalizedName}</h5>
  <h6>${t.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${r.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${r.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;let i=`images/icons/${r.WeatherIcon}.svg`;c.setAttribute("src",i);let a=r.IsDayTime?"images/day.svg":"images/night.svg";l.setAttribute("src",a),s.classList.contains("d-none")&&s.classList.remove("d-none")},u=async e=>{let t=await (0,a.getCity)(e),r=await (0,a.getWeather)(t.Key);return{cityDetails:t,weather:r}};n.addEventListener("submit",e=>{e.preventDefault();let t=n.elements.cityInput.value.trim();n.reset(),u(t).then(e=>d(e)).catch(e=>console.log(e))});
//# sourceMappingURL=index.5efa0205.js.map
