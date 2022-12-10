const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector("#wind-speed");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=48.53929668071575&lon=-121.74627202353687&appid=8fb24c7b1154915d2992003034a0fa9a&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
}

}
function  displayResults(weatherData) {
  const temp = weatherData.main.temp.toFixed(0)
  currentTemp.innerHTML = `<strong>${temp}&deg;F</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  const speed = weatherData.wind.speed.toFixed(0)
  windSpeed.innerHTML = `${speed} mph`;
  calc_windChill(temp, speed);
}

function calc_windChill(temp, speed){
  if (temp <= 50 && speed >= 3.0) {
    const chill = 
        35.74 + 
        0.6215 * temp - 
        35.75 * speed ** 0.16 +
        0.4275 * temp * speed ** 0.16;
    document.getElementById("wind-chill").textContent = Math.round(chill);
  }
  else {
      document.getElementById("wind-chill").textContent = "N/A";
  }
}

apiFetch();
