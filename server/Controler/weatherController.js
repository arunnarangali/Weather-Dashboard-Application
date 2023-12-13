const {fetchWeather} = require('../Service/weatherService');

const getWeather =async (req,res)=>{
  try {
    const City=req.params.city
    const weatherData = await fetchWeather(City);
    console.log(weatherData)
    res.status(200).json(weatherData);
  } catch (error) {
    console.log(error)
    if (error.message === 'City not found') {
      return res.status(404).json({ error: 'City not found' });
    } else {
      return res.status(500).json({ error: 'Internal server error' });
    }
  
  }
}

module.exports = {getWeather}