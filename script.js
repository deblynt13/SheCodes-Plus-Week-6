function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours} :${minutes}`;
}

function displayWeatherCondition(response) {
  let city = document.querySelector("#city");
  let date = document.querySelector("#formatDate");
  let temperature = document.querySelector("#temperature");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  
  city.innerHTML = response.data.name;
  date.innerHTML(response.data.dt * 1000);
  temperature..innerHTML = Math.round(
    response.data.main.temp
  );
  description.innerHTML =
    response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    


}

function searchCity(city) {
  let apiKey = "2abcdcc61962b2b7f2b8e768d3b810e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "2abcdcc61962b2b7f2b8e768d3b810e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather? 
  &Lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&uni
  ts=$=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Coventry");
