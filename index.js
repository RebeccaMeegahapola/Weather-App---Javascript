const apiKey = 'aa56feb06eed8a2a227df36ccf5b528e'; //API Key

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=aa56feb06eed8a2a227df36ccf5b528e`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
                console.log(data)
            } else {
                document.getElementById('weather').innerHTML = 'City not found!';
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}


function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const { main, name, sys, weather, wind, coord, timezone } = data;
    const iconCode = weather[0].icon;
    const iconUrl = `./animated/${iconCode}.svg`; // Path to your icons

    const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString();

    weatherDiv.innerHTML = `      
        <h4 class="mt-4">${name}, ${sys.country}</h4>
        <img src="${iconUrl}" alt="${weather[0].description}" class="mt-1">       
        <h4>${weather[0].description}</h4>
        
        <p>Temperature: ${main.temp}°C</p>
    `;

    const windCard = document.getElementById('windCard');
    const humidityCard = document.getElementById('humidity-card');
    const temperatureCard = document.getElementById('temperature-card');
    const sealevelCard = document.getElementById('seaLevelCard');
    const pressureCard = document.getElementById('pressure-card');
    const coordsCard = document.getElementById('coords-card');
    const sunRiseTime = document.getElementById('sunRiseTime-card');
    const sunSetTime = document.getElementById('sunSetTime-card');
    const timezoneCard = document.getElementById('timezone-card');

    windCard.innerHTML = `
        <p>${wind.speed} km/h</p>
    `;

    humidityCard.innerHTML = `
        <p>${main.humidity}%</p>
    `;

    temperatureCard.innerHTML = `
        <p>${main.temp}°C</p>
    `;

    sealevelCard.innerHTML = `
        <p>${main.sea_level} hPa</p>
    `;
    
    pressureCard.innerHTML = `
        <p>${main.pressure} hPa</p>
    `;

    coordsCard.innerHTML = `
        <p>lat: ${coord.lat} hPa</p>
        <p>lon: ${coord.lon} hPa</p>
    `;

    sunRiseTime.innerHTML = `
        <p>${sunriseTime}</p>
    `;

    sunSetTime.innerHTML = `
        <p>${sunsetTime}</p>
    `;

    timezoneCard.innerHTML = `
        <p>${timezone}</p>
    `;

}

