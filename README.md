# Weather Dashboard Application

This project is a simple weather dashboard application that enables users to check the current weather information for a selected city.

## Overview

<!-- Briefly describe the project and its purpose -->

The Weather Dashboard Application consists of two main components: a backend server and a frontend interface. The backend, developed using Node.js, handles requests to an external weather API (like OpenWeatherMap) to fetch weather data for specified cities. The frontend, built using React, interacts with the backend to display the retrieved weather information to users.

## Features

<!-- List the key features of your application -->

- **View Weather:** Users can view the current weather information for a chosen city.
- **User-friendly Interface:** The application offers a simple UI with an input field to enter city names and a submit button.
- **Error Handling:** Provides user-friendly messages for invalid city names or server errors.


## Technologies Used

### Backend

<!-- List technologies used in the backend -->

- **Language:** Node.js
- **Framework:** Express 
- **External API:** OpenWeatherMap API
- **HTTP Requests:** Axios

### Frontend

<!-- List technologies used in the frontend -->

- **Framework:** React.js
- **State Management:** React State 
- **HTTP Requests:** Axios

## Setup Instructions

### Backend Setup:

<!-- Instructions for setting up the backend -->

1. Clone the  repository: `https://github.com/arunnarangali/Weather-Dashboard-Application.git`
2. Navigate to the backend directory : `cd server`
3. Install dependencies using `npm install` (for Node.js) or follow instructions specified in the backend README.
4. Run the server using `npm start` or the provided command.

### Frontend Setup:

<!-- Instructions for setting up the frontend -->

1. Clone the  repository: `https://github.com/arunnarangali/Weather-Dashboard-Application.git`
2. Navigate to the frontend directory : `cd client`
3. Install dependencies using `npm install` (or as specified in the frontend README).
4. Start the React development server using `npm start` or the specified command.

## API Documentation

### `GET /weather/{cityName}`

#### Description

<!-- Description of the API endpoint -->

This endpoint fetches the current weather information for the specified city.

#### Request

<!-- Details about the request for the API -->

- **Method:** GET
- **Parameters:**
  - `cityName` (required): Name of the city for which weather information is requested.



### Error Handling

<!-- Explanation of how errors are handled -->

- **404 Not Found:** Occurs when the specified city is not found.
- **500 Internal Server Error:** Generated for any server-related issues or failures in fetching data from the external API.
#### Response

<!-- Example response from the API -->

```json
{
  "city": "City Name",
  "temperature": "Temperature in Celsius",
  "description": "Weather description",
  "humidity": "Humidity percentage",
  "windSpeed": "Wind speed in m/s",
  "sunrise": "Sunrise time",
  "sunset": "Sunset time",
  "pressure": "Pressure in hPa"
 
}
