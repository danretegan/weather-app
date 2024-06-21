import { Forecast } from './forecast.js';
import dayImage from './images/day.svg';
import nightImage from './images/night.svg';
import icons from './icons.js';

const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const weatherIconUse = document.querySelector('.weather-icon use');
const errorMessage = document.querySelector('.error-message');

const forecast = new Forecast();

const showError = message => {
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('d-none');
  } else {
    console.error('The element .error-message was not found in the DOM.');
  }
};

const hideError = () => {
  if (errorMessage) {
    errorMessage.classList.add('d-none');
    errorMessage.textContent = '';
  } else {
    console.error('The element .error-message was not found in the DOM.');
  }
};

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
  if (iconId) {
    weatherIconUse.setAttribute('xlink:href', iconId); //* Setăm xlink:href pentru weather-icon.
    weatherIconUse.parentElement.classList.remove('d-none'); //* Asigurăm că iconița este vizibilă.
  } else {
    console.warn(`No icon found for WeatherIcon ${weather.WeatherIcon}`);
    weatherIconUse.parentElement.classList.add('d-none'); //* Ascundem iconița dacă nu există corespondent.
  }

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
    .then(data => {
      updateUI(data);
      hideError();
    })
    .catch(err => {
      console.log(err);
      showError('Failed to fetch the weather details. Please try again.');
    });

  localStorage.setItem('city', city);
});

//* Verificăm dacă există o locație salvată în localStorage și actualizeazăm UI-ul:
const savedCity = localStorage.getItem('city');
if (savedCity) {
  forecast
    .updateCity(savedCity)
    .then(data => {
      updateUI(data);
      hideError();
    })
    .catch(err => {
      console.log(err);
      showError(
        'Failed to fetch the weather details for the saved city. Please try again.'
      );
    });
}
