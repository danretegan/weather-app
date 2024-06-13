!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequirebbde;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequirebbde=r),r.register;var n=r("fC6JI");let a=document.querySelector("form"),s=document.querySelector(".card"),l=document.querySelector(".details"),o=document.querySelector("img.time"),c=document.querySelector(".icon img"),d=e=>{let{cityDetails:t,weather:i}=e;console.log(e),l.innerHTML=`
  <h5 class="my-3">${t.LocalizedName}</h5>
  <h6>${t.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${i.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${i.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;let r=`images/icons/${i.WeatherIcon}.svg`;c.setAttribute("src",r);let n=null;n=i.IsDayTime?"images/day.svg":"images/night.svg",o.setAttribute("src",n),s.classList.contains("d-none")&&s.classList.remove("d-none")},u=async e=>{let t=await (0,n.getCity)(e),i=await (0,n.getWeather)(t.Key);return{cityDetails:t,weather:i}};a.addEventListener("submit",e=>{e.preventDefault();let t=a.elements.cityInput.value.trim();a.reset(),u(t).then(e=>d(e)).catch(e=>console.log(e))})}();
//# sourceMappingURL=index.8219dee3.js.map
