// --- JAVASCRIPT LOGIC ---

// --- Configuration and Constants ---
// IMPORTANT: Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key.
const API_KEY = '709dff2b0769e045191c518e9df14897';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// --- DOM Elements ---
const cityInput = document.getElementById('city-input');
const submitBtn = document.getElementById('submit-btn');
const weatherDisplay = document.getElementById('weather-display');
const loadingSpinner = document.getElementById('loading-spinner');
const errorMessage = document.getElementById('error-message');

const tempEl = document.getElementById('temperature');
const descEl = document.getElementById('description');
const locationEl = document.getElementById('location');
const iconEl = document.getElementById('weather-icon');
const windEl = document.getElementById('wind-speed');
const humidityEl = document.getElementById('humidity');
const pressureEl = document.getElementById('pressure');

/**
 * Simple mapping for OpenWeatherMap codes to high-contrast Emojis/Icons
 * for a modern, clean look.
 */
const iconMap = {
    '01d': '☀️', // Clear sky day
    '01n': '🌙', // Clear sky night
    '02d': '🌤️', // Few clouds day
    '02n': '☁️', // Few clouds night
    '03d': '☁️', // Scattered clouds day
    '03n': '☁️', // Scattered clouds night
    '04d': ' overcast', // Broken clouds day (overcast)
    '04n': ' overcast', // Broken clouds night (overcast)
    '09d': '🌧️', // Shower rain day
    '09n': '🌧️', // Shower rain night
    '10d': '🌦️', // Rain day
    '10n': '🌧️', // Rain night
    '11d': '⛈️', // Thunderstorm day
    '11n': '⛈️', // Thunderstorm night
    '13d': '❄️', // Snow day
    '13n': '❄️', // Snow night
    '50d': '🌫️', // Mist day
    '50n': '🌫️', // Mist night
};

// --- Utility Functions ---

/**
 * Shows the loading spinner and hides all other content.
 */
const showLoading = () => {
    weatherDisplay.classList.add('hidden');
    errorMessage.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Loading...';
};

/**
 * Hides the loading spinner and re-enables the button.
 */
const hideLoading = () => {
    loadingSpinner.classList.add('hidden');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Get Weather';
};

/**
 * Displays an error message to the user.
 * @param {string} message - The error message to display.
 */
const displayError = (message) => {
    hideLoading();
    weatherDisplay.classList.add('hidden');
    errorMessage.textContent = `Error: ${message}`;
    errorMessage.classList.remove('hidden');
};

/**
 * Clears the display and prepares for new data.
 */
const clearDisplay = () => {
    // Hide all children elements with smooth transition
    const children = weatherDisplay.querySelectorAll('#weather-display > div');
    children.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4');
    });
}

/**
 * Fetches weather data from OpenWeatherMap API.
 * @param {string} city - The name of the city.
 */
const fetchWeatherData = async (city) => {
    if (!city) {
        displayError("Please enter a city name.");
        return;
    }
    if (API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
        displayError("API Key not set. Please replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual key.");
        return;
    }

    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    showLoading();

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status !== 200) {
            // Handle API-specific errors (e.g., city not found)
            throw new Error(data.message || "Could not retrieve weather data.");
        }

        updateWeatherDisplay(data);

    } catch (error) {
        console.error("API Fetch Error:", error);
        displayError(`Failed to fetch weather: ${error.message}`);
    } finally {
        hideLoading();
    }
};

/**
 * Updates the DOM with the fetched weather data.
 * @param {object} data - The weather data object from the API.
 */
const updateWeatherDisplay = (data) => {
    // 1. Clear error message and ensure weather display is visible
    errorMessage.classList.add('hidden');
    weatherDisplay.classList.remove('hidden');

    // 2. Clear old data transitions
    clearDisplay();

    // 3. Populate new data
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const locationName = `${data.name}, ${data.sys.country}`;
    const iconCode = data.weather[0].icon;
    const windSpeed = data.wind.speed.toFixed(1);
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;

    tempEl.textContent = `${temp}°C`;
    descEl.textContent = description;
    locationEl.textContent = locationName;
    iconEl.innerHTML = iconMap[iconCode] || '❓';
    windEl.textContent = `${windSpeed}`;
    humidityEl.textContent = `${humidity}`;
    pressureEl.textContent = `${pressure}`;

    // 4. Trigger smooth transition of new elements
    setTimeout(() => {
        const children = weatherDisplay.querySelectorAll('#weather-display > div, #weather-display .opacity-0');
        children.forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-4');
        });
    }, 100);

    // 5. Ensure Lucide icons are rendered for the extra details
    lucide.createIcons();
};

// --- Event Listeners ---

submitBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    fetchWeatherData(city);
});

// Initialize with a default location on load
window.addEventListener('load', () => {
    fetchWeatherData('London');
});
