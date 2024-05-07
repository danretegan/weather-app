import { getCity, getWeather } from './forecast.js';

const cityForm = document.querySelector('form');

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  //TODO   Object Shorthand Notation:
  return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  //   get city value:
  const city = cityForm.elements.cityInput.value.trim();
  cityForm.reset();

  //   update the ui with the new city:
  updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
