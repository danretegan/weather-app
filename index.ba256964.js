var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequirebbde;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequirebbde=a),(0,a.register)("gfxvS",function(e,t){Object.defineProperty(e.exports,"Forecast",{get:function(){return i},set:void 0,enumerable:!0,configurable:!0});class i{constructor(){this.apiKey="S7G2LbP0Y0yEFG1MikAzostUxeEZK6Pl",this.weatherURI="https://dataservice.accuweather.com/currentconditions/v1/",this.cityURI="https://dataservice.accuweather.com/locations/v1/cities/search"}async updateCity(e){let t=await this.getCity(e),i=await this.getWeather(t.Key);return{cityDetails:t,weather:i}}async getCity(e){let t=`?apikey=${this.apiKey}&q=${e}`,i=await fetch(this.cityURI+t);return(await i.json())[0]}async getWeather(e){let t=`${e}?apikey=${this.apiKey}`,i=await fetch(this.weatherURI+t);return(await i.json())[0]}}}),a("gfxvS");
//# sourceMappingURL=index.ba256964.js.map