function displayTemperature(response) {
    console.log(response.data);
    let searchInputElement = document.querySelector("#search-input");
    let temp = document.querySelector("#weather-temp-value");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;
    let hum = document.querySelector("#hum");
    let wind = document.querySelector("#wind");
    let description = document.querySelector("#description");
    let iconElement = document.querySelector("#icon");
  
    let newhum = response.data.temperature.humidity;
    let newwind = response.data.wind.speed;
    let newdesc = response.data.condition.description;
    let newicon = response.data.condition.icon_url;
    let newtemp = Math.round(response.data.temperature.current);
  
    hum.innerHTML = `${newhum}`;
    wind.innerHTML = `${newwind}`;
    description.innerHTML = `${newdesc}`;
    temp.innerHTML = `${newtemp}`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
    
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let apiKey = "e36c54bf048bb3e335ao3ad2t304e803";
    let city = searchInputElement.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    console.log(apiUrl);
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);