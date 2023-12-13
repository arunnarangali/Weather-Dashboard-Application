const { getWeather } = require('./weatherController'); 
const { fetchWeather } = require('../Service/weatherService'); 

jest.mock('../Service/weatherService'); // Mocking the fetchWeather function

describe('getWeather function', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {
        city: 'London' // Replace with a valid city name for testing
      }
    };
    res = {
      status: jest.fn(() => res),
      json: jest.fn()
    };
  });

  test('should return weather data for a valid city', async () => {
    const weatherData = {
      city: 'London',
      description: 'Clear sky',
      wind: 5,
      temperature: 25,
      humidity: 50,
      sunrise: '1:26:45 pm',
      sunset: '9:21:31 pm',
      pressure: 992
    };

    fetchWeather.mockResolvedValue(weatherData);

    await getWeather(req, res);

    expect(fetchWeather).toHaveBeenCalledWith('London');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(weatherData);
  });

  test('should return 404 error for an invalid city', async () => {
    const error = new Error('City not found');
    error.message = 'City not found';

    fetchWeather.mockRejectedValue(error);

    await getWeather(req, res);

    expect(fetchWeather).toHaveBeenCalledWith('London');
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'City not found' });
  });

  test('should return 500 error for other errors', async () => {
    const error = new Error('Internal server error');

    fetchWeather.mockRejectedValue(error);

    await getWeather(req, res);

    expect(fetchWeather).toHaveBeenCalledWith('London');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });
});
