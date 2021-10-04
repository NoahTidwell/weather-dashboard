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

    



    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityInputText + "&APPID=b30096dc99b5b0d5c4edfccb15cd2965")
    .then(response => response.json())
    .then(function(data) {
        var cityName = data.name;
        cityName.classList = "text-center"
        displayCityName.textContent = cityName;
        var temp = "Current Temp:" + " " + Math.floor((data.main.temp - 273.15) * 9/5 + 32) + "°F";
        displayCurrentTemp.append(temp);
    })
}
// Fetch API DATA

searchBtn.addEventListener("click", displayCity);