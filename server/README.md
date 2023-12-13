# Weather Dashboard Backend

This backend server is responsible for providing weather information by integrating with an external weather API (like OpenWeatherMap) and serving the data to the frontend of the Weather Dashboard application.

## Setup

### Prerequisites

- Node.js installed on your machine. If not, you can download and install it from [Node.js Official Website](https://nodejs.org/).
- An API key from the chosen weather service provider (e.g., OpenWeatherMap). Sign up on their website to obtain an API key.

### Installation

1. Clone the repository.

    ```bash
    git clone <https://github.com/arunnarangali/Weather-Dashboard-Application.git>
    ```

2. Navigate to the backend directory.

    ```bash
    cd server
    ```

3. Install dependencies.

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your API key.

    ```env
    API_KEY=your_weather_api_key
    ```

## Usage

### Starting the Server

To start the server, run:

```bash
npm start
```

### Testing the Server
To test the server, run:
```bash
npm test
```