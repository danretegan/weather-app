const apiKey = 'S7G2LbP0Y0yEFG1MikAzostUxeEZK6Pl';

//TODO get weather information:
export const getWeather = async cityKey => {
  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${cityKey}?apikey=${apiKey}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// TODO get city information:
export const getCity = async city => {
  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};
