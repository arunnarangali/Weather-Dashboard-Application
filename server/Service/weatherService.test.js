const { fetchWeather } = require('./weatherService'); 

describe('fetchWeather function', () => {
  test('should return weather information for a valid city', async () => {
    // Mocking axios.get method to simulate a successful API call
    const mockResponse = {
      data: {
        weather: [{ description: 'Clear sky' }],
        main: { temp: 25, humidity: 50 ,pressure: 992},
        name: 'London',
        wind: { speed: 5 },
        sys: {sunrise: 1702367805,sunset: 1702396291}
      }
    };

    const mockAxios = jest.fn().mockResolvedValue(mockResponse);
    const originalAxios = require('axios');
    require('axios').get = mockAxios;

    const weatherInfo = await fetchWeather('London');

    expect(weatherInfo).toEqual({
      city: 'London',
      description: 'Clear sky',
      wind: 5,
      temperature: 25,
      humidity: 50,
      sunrise: '1:26:45 pm',
      sunset: '9:21:31 pm',
      pressure: 992
    });

    require('axios').get = originalAxios.get;
  });

  test('should throw an error for an invalid city', async () => {
    // Mocking axios.get method to simulate a 404 error
    const mockAxios = jest.fn().mockRejectedValue({ response: { status: 404 } });
    const originalAxios = require('axios');
    require('axios').get = mockAxios;

    await expect(fetchWeather('InvalidCity')).rejects.toThrow('City not found');

    require('axios').get = originalAxios.get;
  });

  test('should throw an error for any other error while fetching weather data', async () => {
    // Mocking axios.get method to simulate any other error
    const mockAxios = jest.fn().mockRejectedValue(new Error('Failed to fetch weather data'));
    const originalAxios = require('axios');
    require('axios').get = mockAxios;

    await expect(fetchWeather('City')).rejects.toThrow('Failed to fetch weather data');

    require('axios').get = originalAxios.get;
  });
});
