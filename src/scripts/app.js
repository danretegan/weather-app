import { getCity, getWeather } from './forecast.js';

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = data => {
  //!   Destructuring:
  const { cityDetails, weather } = data;

  details.innerHTML = `
  <h5 class="my-3">${cityDetails.LocalizedName}</h5>
  <h6>${cityDetails.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  //   get city value:
  const city = cityForm.elements.cityInput.value.trim();
  cityForm.reset();

  //   update the ui with the new city:
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
