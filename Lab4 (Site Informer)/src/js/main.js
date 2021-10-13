// OpenWeather Source
const api = {
  key: "2a11a1d5bd46885d6d9b3a2da86d6b8a",
  baseurl1: "http://api.openweathermap.org/data/2.5/"
}

const search_box = document.querySelector('.search-box');
search_box.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(search_box.value);
    console.log(search_box.value);
  }
}

function getResults (query) 
{
  fetch(`${api.baseurl1}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
}).then(displayResults);
}

function displayResults (weather) 
{
  console.log(weather);

  let city = document.querySelector('.location .city');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerHTML = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_ico = document.querySelector('.current .weather-ico');
  weather_ico.innerHTML = "<img width='75px'src='http://openweathermap.org/img/w/"+weather.weather[0].icon+".png'>";

  let desc = document.querySelector('.current .description');
  desc.innerHTML = "Description: " + weather.weather[0].description;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let humidity = document.querySelector('.humidity');
  humidity.innerHTML = `Humidity: ${weather.main.humidity}%`;

  let hi_low = document.querySelector('.hi-low');
  hi_low.innerHTML = 
  `Feels like between ${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}

function dateBuilder (dt) 
{
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let day = days[dt.getDay()];
  let date = dt.getDate();
  let month = months[dt.getMonth()];
  let year = dt.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

// Local Source
const url3 = "data.json"

let res3

fetch(url3)
.then(response => response.json())
.then(r => {
  res3 = r;
  console.log(res3)
})