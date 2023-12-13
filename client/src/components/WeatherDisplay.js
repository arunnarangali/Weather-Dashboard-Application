
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faCloudSun, faDropletSlash, faSun, faTornado, faWind } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

function WeatherDisplay() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:8000/weather/${city}`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-form">
        <h1>Sky Cast</h1>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Get Weather
            </button>
          </div>
        </form>
        {weatherData && (
          <div className="card weather-card">
            <div className="card-body">
              <h2 className="card-title">
                {weatherData.temperature} <sup>°</sup>C
              </h2>
              <p className="bold">
                <FontAwesomeIcon icon={faCloudSun} />
                {weatherData.description}
              </p>
              <div className="top-row">
                    <div className="city">
                     <FontAwesomeIcon icon={faCity} />
                      <p> City</p>
                      <p className='bold'>{weatherData.city} </p>
                    </div>
                    <div className="humidity">
                      <FontAwesomeIcon icon={faDropletSlash} />
                      <p>humidity</p>
                      <p className='bold'>  {weatherData.humidity}%   </p> 
                    </div>
                    <div className="Wind">
                        <FontAwesomeIcon icon={faWind} />
                        <p>Wind</p>
                        <p className='bold'>{weatherData.wind}inHg</p>
                    </div>
                </div>
                <div className="bottom-row">    
                    <div className="Sunrise">
                          <FontAwesomeIcon icon={faSun} />
                        <p>Sunrise</p>
                        <p className='bold'>{weatherData.sunrise}</p>
                    </div>
                    <div className="SunSet">
                          <FontAwesomeIcon icon={faSun} />
                          <p>sunset</p>
                        <p className='bold'>{weatherData.sunset}</p>
                    </div>
                    <div className="pressure">
                        <FontAwesomeIcon icon={faTornado} />
                        <p>Pressure</p>
                        <p className='bold'>{weatherData.pressure}Pa</p>
                    </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default WeatherDisplay;
