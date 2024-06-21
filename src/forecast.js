export class Forecast {
  constructor() {
    this.apiKey = 'S7G2LbP0Y0yEFG1MikAzostUxeEZK6Pl';
    this.weatherURI =
      'https://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI =
      'https://dataservice.accuweather.com/locations/v1/cities/search';
  }

  async updateCity(city) {
    try {
      const cityDetails = await this.getCity(city);
      const weather = await this.getWeather(cityDetails.Key);
      return { cityDetails, weather };
    } catch (error) {
      console.error('Error updating city:', error);
      throw new Error('Failed to update city');
    }
  }

  async getCity(city) {
    try {
      const query = `?apikey=${this.apiKey}&q=${city}`;
      const response = await fetch(this.cityURI + query);
      if (!response.ok) {
        throw new Error('Failed to fetch city details');
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error('City not found');
      }
      return data[0];
    } catch (error) {
      console.error('Error fetching city details:', error);
      throw new Error('Failed to fetch city details');
    }
  }

  async getWeather(id) {
    try {
      const query = `${id}?apikey=${this.apiKey}`;
      const response = await fetch(this.weatherURI + query);
      if (!response.ok) {
        throw new Error('Failed to fetch weather details');
      }
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error('Error fetching weather details:', error);
      throw new Error('Failed to fetch weather details');
    }
  }
}
