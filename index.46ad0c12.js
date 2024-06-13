!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequirebbde;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequirebbde=r),r.register;var a=r("fC6JI");let n=document.querySelector("form"),o=document.querySelector(".card"),l=document.querySelector(".details"),s=document.querySelector("img.time"),c=document.querySelector(".icon img"),d=e=>{let{cityDetails:t,weather:i}=e;console.log(e),l.innerHTML=`
  <h5 class="my-3">${t.LocalizedName}</h5>
  <h6>${t.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${i.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${i.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;let r=`images/icons/${i.WeatherIcon}.svg`;c.setAttribute("src",r);let a=i.IsDayTime?"images/day.svg":"images/night.svg";s.setAttribute("src",a),o.classList.contains("d-none")&&o.classList.remove("d-none")},u=async e=>{let t=await (0,a.getCity)(e),i=await (0,a.getWeather)(t.Key);return{cityDetails:t,weather:i}};n.addEventListener("submit",e=>{e.preventDefault();let t=n.elements.cityInput.value.trim();n.reset(),u(t).then(e=>d(e)).catch(e=>console.log(e)),localStorage.setItem("city",t)}),localStorage.getItem("city")&&u(localStorage.getItem("city")).then(e=>d(e)).catch(e=>console.log(e))}();
//# sourceMappingURL=index.46ad0c12.js.map
