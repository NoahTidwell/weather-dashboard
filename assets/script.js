// Global Variables
var cityInput = document.getElementById("cityInput");
var searchBtn = document.querySelector("button");
var displaySearchedCity = document.getElementById("displaySearch");

var displayCity = function () {
    var cityInputText = cityInput.value;
    var createListEl = document.createElement("li");
    createListEl.textContent = cityInputText;
    displaySearchedCity.appendChild(createListEl);

    var displayCurrentTemp = document.getElementById("currentTemp");
    var displayCityName = document.getElementById("citySearch");
    var displayHumid = document.getElementById("currentHumid");
    var weatherDescription = document.getElementById("weatherDescription");

    var clearInfo = function () {
        displayCurrentTemp.innerHTML = "";
        displayCityName.innerHTML = "";
        displayHumid.innerHTML = "";
        weatherDescription.innerHTML = "";
    }

    // Fetch API DATA
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityInputText + "&APPID=b30096dc99b5b0d5c4edfccb15cd2965")
    .then(response => response.json())
    .then(function(data) {
        // clear previous info
        clearInfo();
        
        // City Name Display
        var cityName = data.name;
        cityName.classList = "text-center"
        displayCityName.textContent = cityName;

        // Current Temp Display
        var temp = "Current Temp:" + " " + Math.floor((data.main.temp - 273.15) * 9/5 + 32) + "°F";
        displayCurrentTemp.append(temp);


        // Humidity Display
        var humid = "Current Humidity:" + " " + data.main.humidity + "%";
        displayHumid.append(humid);

        // Weather Description
        weatherDescription.append(data.weather[0].description);
    })
}

searchBtn.addEventListener("click", displayCity);