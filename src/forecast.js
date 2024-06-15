export class Forecast {
  constructor() {
    this.apiKey = 'S7G2LbP0Y0yEFG1MikAzostUxeEZK6Pl';
    this.weatherURI =
      'https://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI =
      'https://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    return { cityDetails, weather };
  }
  async getCity(city) {
    const query = `?apikey=${this.apiKey}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.apiKey}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}
