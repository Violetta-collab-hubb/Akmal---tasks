
async function fetchWeather() {
    const city = document.getElementById('cityInput').value.trim();
    
    if (!city) return alert("Выберите город!");


    const apiKey = "7c6de3e1263ff4e51aebfc82e6d13852";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) throw new Error(`Ошибка сервера (${response.status})`);
        
        const data = await response.json();
        
        showWeather(data);
    } catch (err) {
        console.error(err.message);
        alert("Что-то пошло не так, проверьте правильность названия города.");
    }
}
function showWeather(weatherData) {
    const weatherDiv = document.getElementById('weatherData');
    weatherDiv.style.display = 'block'; // показываем div
    weatherDiv.innerHTML = `
        <p><strong>Город:</strong> ${weatherData.name}</p>
        <p><strong>Температура:</strong> ${Math.round(weatherData.main.temp)}°C</p>
        <p><strong>Описание:</strong> ${weatherData.weather[0].description}</p>
        <p><strong>Давление:</strong> ${weatherData.main.pressure} hPa</p>
        <p><strong>Влажность воздуха:</strong> ${weatherData.main.humidity}%</p>
    `;
}