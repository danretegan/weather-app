!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequirebbde;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequirebbde=r),r.register;var o=r("fC6JI");let a=document.querySelector("form"),n=document.querySelector(".card"),l=document.querySelector(".details"),s=document.querySelector("img.time"),c=document.querySelector(".icon img"),d=new o.Forecast,u=e=>{let{cityDetails:t,weather:i}=e;console.log(e),l.innerHTML=`
  <h5 class="my-3">${t.LocalizedName}</h5>
  <h6>${t.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${i.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${i.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;let r=`images/icons/${i.WeatherIcon}.svg`;c.setAttribute("src",r);let o=i.IsDayTime?"images/day.svg":"images/night.svg";s.setAttribute("src",o),n.classList.contains("d-none")&&n.classList.remove("d-none")};a.addEventListener("submit",e=>{e.preventDefault();let t=a.cityInput.value.trim();a.reset(),d.updateCity(t).then(e=>u(e)).catch(e=>console.log(e)),localStorage.setItem("city",t)}),localStorage.getItem("city")&&d.updateCity(localStorage.getItem("city")).then(e=>u(e)).catch(e=>console.log(e))}();
//# sourceMappingURL=index.cd843b34.js.map
