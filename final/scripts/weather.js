const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentHumidity = document.querySelector('#humidity');
var forecastEl = document.querySelector("#forecast");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=8fb24c7b1154915d2992003034a0fa9a&units=imperial';

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

forecastEl[0].classList.add('loaded');

		response.json().then(function (data) {
			var fday = "";
			data.daily.forEach((value, index) => {
				if (index > 0) {
					var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long",
					});
					var icon = value.weather[0].icon;
					var temp = value.temp.day.toFixed(0);
					fday = `<div class="forecast-day">
						<p>${dayname}</p>
						<p><span class="ico-${icon}" title="${icon}"></span></p>
						<div class="forecast-day--temp">${temp}<sup>°C</sup></div>
					</div>`;
					forecastEl[0].insertAdjacentHTML('beforeend', fday);
				}
			});
		});


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


apiFetch();
