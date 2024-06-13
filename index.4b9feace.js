var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequirebbde;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequirebbde=a),a.register;var i=a("gfxvS");const o=document.querySelector("form"),n=document.querySelector(".card"),l=document.querySelector(".details"),s=document.querySelector("img.time"),c=document.querySelector(".icon img"),d=e=>{let{cityDetails:t,weather:r}=e;console.log(e),l.innerHTML=`
  <h5 class="my-3">${t.LocalizedName}</h5>
  <h6>${t.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${r.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${r.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;let a=`images/icons/${r.WeatherIcon}.svg`;c.setAttribute("src",a);let i=r.IsDayTime?"images/day.svg":"images/night.svg";s.setAttribute("src",i),n.classList.contains("d-none")&&n.classList.remove("d-none")},u=async e=>{let t=await (0,i.getCity)(e),r=await (0,i.getWeather)(t.Key);return{cityDetails:t,weather:r}};o.addEventListener("submit",e=>{e.preventDefault();let t=o.elements.cityInput.value.trim();o.reset(),u(t).then(e=>d(e)).catch(e=>console.log(e)),localStorage.setItem("city",t)}),localStorage.getItem("city")&&u(localStorage.getItem("city")).then(e=>d(e)).catch(e=>console.log(e));
//# sourceMappingURL=index.4b9feace.js.map
