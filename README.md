# 🌤️ The Horizon Weather — Modern Weather App

You can acess the site here: https://dheerajkaushik.github.io/weather/

A sleek, modern, and responsive **Weather Application** built using **HTML**, **Tailwind CSS**, and **JavaScript (ES6)**.  
It fetches real-time weather data from the **OpenWeatherMap API** and displays it with smooth transitions, minimalist design, and emoji-based weather icons.

<img width="1019" height="870" alt="image" src="https://github.com/user-attachments/assets/0c5656d6-bc19-446b-9744-3ccadc54d10f" />


---

## 🚀 Features

### 🌍 Search Weather by City Name
Enter any city name to get instant weather updates.

### ⚡ Real-Time Data
Fetches accurate and up-to-date weather information directly from **OpenWeatherMap API**.

### 🎨 Modern UI/UX
- Built with **Tailwind CSS** for a clean, glassy, and responsive interface  
- Subtle animations and transitions for a smooth user experience  
- **Lucide Icons** for extra visual appeal  

### 🌀 Loading & Error States
- Loading spinner while fetching data  
- Graceful error handling for invalid city names or network issues  

### 🌡️ Detailed Weather Info
Displays:
- Temperature (°C)  
- Weather condition description  
- City and country name  
- Wind speed (m/s)  
- Humidity (%)  
- Pressure (hPa)

### ☀️ Dynamic Icons
Weather conditions are represented using emoji icons for clarity and fun.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the app |
| **Tailwind CSS** | Styling and layout |
| **JavaScript (ES6)** | Application logic and API handling |
| **OpenWeatherMap API** | Weather data source |
| **Lucide Icons** | Modern vector icons |

---

## 🛠️ Project Setup

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/the-horizon-weather.git
cd the-horizon-weather 
              

2️⃣ Open the Project

Open the project folder in your favorite code editor (e.g., VS Code).

3️⃣ Add Your API Key

Inside script.js, replace the placeholder with your OpenWeatherMap API key:
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

You can get a free key by signing up here 👉 OpenWeatherMap API

4️⃣ Run the App

Simply open the index.html file in your web browser — no build tools required!

💻 Folder Structure
the-horizon-weather/
├── index.html      # Main HTML file
├── script.js       # Core JavaScript logic (fetch + display)
├── style.css       # Custom styles (optional)
├── README.md       # Documentation


  Code Highlights

Uses Async/Await for clean asynchronous API calls

Dynamic DOM updates using vanilla JavaScript

Error handling for missing or invalid city names

Smooth animations via Tailwind’s utility classes

Responsive design optimized for both mobile and desktop
