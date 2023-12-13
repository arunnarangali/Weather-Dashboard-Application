const axios = require('axios');

const fetchWeather = async (city) => {
  try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`);
    console.log(response.data)
    const { weather, main, name,wind,sys } = response.data;

    const weatherInfo = {
      city: name,
      description: weather[0].description,
      wind:wind.speed,
      temperature: main.temp,
      humidity: main.humidity,
      sunrise: convertUnixToTime(sys.sunrise), 
      sunset:convertUnixToTime(sys.sunset),
      pressure:main.pressure
    };

    return weatherInfo;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('City not found');
    } else {
      throw new Error('Failed to fetch weather data');
    }
  }
}


const convertUnixToTime = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  return dateObject.toLocaleTimeString();
};

module.exports = {fetchWeather}