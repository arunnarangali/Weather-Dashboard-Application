const express = require('express');
const {getWeather} = require('../Controler/weatherController');
const routes = express.Router();

routes.route('/:city').get(getWeather)
routes.get('/', (req, res) => {
  res.status(400).json({ error: ' Please provide a city name in the URL to get weather information.' });
});

module.exports = routes;