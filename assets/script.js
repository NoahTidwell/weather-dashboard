// Global Variables
var cityInput = document.getElementById("cityInput");
var searchBtn = document.querySelector("button");
var displaySearchedCity = document.getElementById("displaySearch");

var displayCity = function () {
    var cityInputText = cityInput.value;
    var createListEl = document.createElement("li");
    createListEl.textContent = cityInputText;
    displaySearchedCity.appendChild(createListEl);

}

searchBtn.addEventListener("click", displayCity);
