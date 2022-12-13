const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weathertype');
const currentHumidity = document.querySelector('#humidity');
const dayForecast = document.querySelector('#forecast');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=8fb24c7b1154915d2992003034a0fa9a&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    }
    else {
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

  const humidity = weatherData.main.humidity.toFixed(0)
  currentHumidity.innerHTML = `<strong>${humidity}%</strong>`;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

}


const forecast = data.list.filter((day) => {
  return day.dt_txt.endsWith("15:00:00")});
  forecast.forEach(displayForecast);


function displayForecast(day) {
  dayDate = document.createElement ("p");
  dayTemp = document.createElement ("p");
  dayIcon = document.createElement ("img");

  const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
  const type = day.weather[0].description;

  dayDate.innerHTML = `${day.dt_txt}`;
  dayTemp.innerHTML = `${day.main.temp.toFixed(0)}&deg;F`;
  dayIcon.setAttribute('src', iconsrc);
  dayType.setAttribute('alt', type);

  }


apiFetch();
