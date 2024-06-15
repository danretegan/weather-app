var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequirebbde;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequirebbde=i),i.register;var o=i("gfxvS");const a=document.querySelector("form"),n=document.querySelector(".card"),s=document.querySelector(".details"),l=document.querySelector("img.time"),c=document.querySelector(".icon img"),d=new o.Forecast,u=e=>{let{cityDetails:t,weather:r}=e;console.log(e),s.innerHTML=`
  <h5 class="my-3">${t.LocalizedName}</h5>
  <h6>${t.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${r.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${r.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;let i=`./images/icons/${r.WeatherIcon}.svg`;c.setAttribute("src",i);let o=r.IsDayTime?"./images/day.svg":"./images/night.svg";l.setAttribute("src",o),n.classList.contains("d-none")&&n.classList.remove("d-none")};a.addEventListener("submit",e=>{e.preventDefault();let t=a.cityInput.value.trim();a.reset(),d.updateCity(t).then(e=>u(e)).catch(e=>console.log(e)),localStorage.setItem("city",t)}),localStorage.getItem("city")&&d.updateCity(localStorage.getItem("city")).then(e=>u(e)).catch(e=>console.log(e));
//# sourceMappingURL=index.0ece0b0e.js.map
