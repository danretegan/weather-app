const apiKey = 'S7G2LbP0Y0yEFG1MikAzostUxeEZK6Pl';

//TODO get weather information:
const getWeather = async cityKey => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${cityKey}?apikey=${apiKey}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// TODO get city information:
const getCity = async city => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

getCity('Bistrita')
  .then(data => {
    return getWeather(data.Key);
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
