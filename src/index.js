import { getCity, getWeather } from './forecast.js';

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
  //! destructure properties:
  const { cityDetails, weather } = data;
  console.log(data);

  //! update details template:
  details.innerHTML = `
  <h5 class="my-3">${cityDetails.LocalizedName}</h5>
  <h6>${cityDetails.AdministrativeArea.LocalizedName}</h6>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;

  //! update the night/day & icon images:
  const iconSrc = `images/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // let timeSrc = null;

  // if (weather.IsDayTime) {
  //   timeSrc = 'images/day.svg';
  // } else {
  //   timeSrc = 'images/night.svg';
  // }

  //* Ternary Operator:
  //* const result = condition ? "value 1" : "value 2";

  const timeSrc = weather.IsDayTime ? 'images/day.svg' : 'images/night.svg';

  time.setAttribute('src', timeSrc);

  //! remove the d-none class if present:
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

  //!   get city value:
  const city = cityForm.elements.cityInput.value.trim();
  cityForm.reset();

  //!   update the UI with the new city:
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
