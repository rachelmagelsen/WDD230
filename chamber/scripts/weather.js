const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=48.53929668071575&lon=-121.74627202353687&appid=8fb24c7b1154915d2992003034a0fa9a&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

const speed = parseInt(document.getElementById("speed").textContent);
const temp = parseInt(document.getElementById("temp").textContent);

if (temp <= 50 && speed > 3.0) {
  const windchill =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.42756 * temp * Math.pow(speed, 0.16);
    document.getElementById("windchill").innerHTML =
    Math.round(windchill);
} else {
  document.getElementById("windchill").innerHTML = "N/A";
}

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  speed.textContent = weatherData.wind.speed.toFixed(0);
  windchill.textContent = getWindChill(weatherData.main.temp.toFixed(0), weatherData.wind.speed);
}

apiFetch();