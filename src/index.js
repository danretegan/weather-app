import { Forecast } from './forecast.js';
import dayImage from './images/day.svg';
import nightImage from './images/night.svg';
import icons from './icons.js';

const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const weatherIconUse = document.querySelector('.weather-icon use');

const forecast = new Forecast();

const updateUI = data => {
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

  const iconId = icons[weather.WeatherIcon]; //* Obținem id-ul simbolului din sprite.
  weatherIconUse.setAttribute('xlink:href', iconId); //* Setăm xlink:href pentru weather-icon.

  const timeSrc = weather.IsDayTime ? dayImage : nightImage;
  time.setAttribute('src', timeSrc);

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.cityInput.value.trim();
  cityForm.reset();

  forecast
    .updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  localStorage.setItem('city', city);
});

//* Verificăm dacă există o locație salvată în localStorage și actualizeazăm UI-ul:
const savedCity = localStorage.getItem('city');
if (savedCity) {
  forecast
    .updateCity(savedCity)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}
