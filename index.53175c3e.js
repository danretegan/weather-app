(async t=>{const a=`?apikey=S7G2LbP0Y0yEFG1MikAzostUxeEZK6Pl&q=${t}`,c=await fetch("http://dataservice.accuweather.com/locations/v1/cities/search"+a);return(await c.json())[0]})("Bistrita").then((t=>{console.log(t)})).catch((t=>{console.log(t)}));
//# sourceMappingURL=index.53175c3e.js.map
