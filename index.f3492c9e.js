function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequirebbde;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequirebbde=o),(0,o.register)("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["5ZPII","index.f3492c9e.js","cae76","day.a01fd25d.svg","1lPtv","night.04568320.svg","bWVzt","icons-defs.45f637bf.svg"]'));var a=o("gfxvS"),s={};s=new URL("day.a01fd25d.svg",import.meta.url).toString();var i={};i=new URL("night.04568320.svg",import.meta.url).toString();var c={};c=new URL("icons-defs.45f637bf.svg",import.meta.url).toString();const l=[1,2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44].reduce((t,r)=>(t[r]=`${e(c)}#icon-${r}`,t),{}),d=document.querySelector(".change-location"),u=document.querySelector(".card"),f=document.querySelector(".details"),m=document.querySelector(".time"),g=document.querySelector(".weather-icon use"),h=document.querySelector(".error-message"),p=new a.Forecast,b=e=>{h?(h.textContent=e,h.classList.remove("d-none")):console.error("The element .error-message was not found in the DOM.")},v=()=>{h?(h.classList.add("d-none"),h.textContent=""):console.error("The element .error-message was not found in the DOM.")},y=t=>{let{cityDetails:r,weather:n}=t;f.innerHTML=`
    <h5 class="my-3">${r.LocalizedName}</h5>
    <h6>${r.AdministrativeArea.LocalizedName}</h6>
    <div class="my-3">${n.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${n.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;let o=l[n.WeatherIcon];o?(g.setAttribute("xlink:href",o),g.parentElement.classList.remove("d-none")):(console.warn(`No icon found for WeatherIcon ${n.WeatherIcon}`),g.parentElement.classList.add("d-none"));let a=n.IsDayTime?e(s):e(i);m.setAttribute("src",a),u.classList.contains("d-none")&&u.classList.remove("d-none")};d.addEventListener("submit",e=>{e.preventDefault();let t=d.cityInput.value.trim();d.reset(),p.updateCity(t).then(e=>{y(e),v()}).catch(e=>{console.log(e),b("Failed to fetch the weather details. Please try again.")}),localStorage.setItem("city",t)});const S=localStorage.getItem("city");S&&p.updateCity(S).then(e=>{y(e),v()}).catch(e=>{console.log(e),b("Failed to fetch the weather details for the saved city. Please try again.")});
//# sourceMappingURL=index.f3492c9e.js.map
