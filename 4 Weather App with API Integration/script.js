const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeather');
const cityNameEl = document.getElementById('cityName');
const tempEl = document.getElementById('temperature');
const descEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('windSpeed');
const errorEl = document.getElementById('error');
const loadingEl = document.getElementById('loading');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        clearWeather();
        errorEl.textContent = 'Please enter a city name.';
    }
});

function clearWeather() {
    cityNameEl.textContent = '';
    tempEl.textContent = '';
    descEl.textContent = '';
    humidityEl.textContent = '';
    windEl.textContent = '';
    errorEl.textContent = '';
    loadingEl.textContent = '';
}

function fetchWeather(city) {
    clearWeather();
    loadingEl.textContent = 'Loading...';

    const apiKey = '1f32345fd9d0dcab08b3a46abe0bc264'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            loadingEl.textContent = '';

            if (data.cod === 200) {
                cityNameEl.textContent = data.name;
                tempEl.textContent = `Temperature: ${data.main.temp}°C`;
                descEl.textContent = `Description: ${data.weather[0].description}`;
                humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
                windEl.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                errorEl.textContent = '';
            } else {
                errorEl.textContent = `Error: ${data.message}`;
            }
        })
        .catch(error => {
            loadingEl.textContent = '';
            errorEl.textContent = 'An error occurred while fetching the weather data.';
            console.error('Error fetching weather data:', error);
        });
}