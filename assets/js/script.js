var cityListEl = document.getElementById('cityList');
var searchBtnEl = document.getElementById('search-button');
var cityInputEl = document.getElementById('city-input');
var clearBtnEl = document.getElementById('clear-btn');
var currentWeatherEl = document.getElementById('currentWeather');
var forecastEls = document.getElementById('forecast-container')
var historyItemEl = document.getElementsByTagName('a');

let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
const apiKey = '1d78db7b251b897a2d0693c8c96ae579'

var weatherFunction = function () {

    var cityInput = document.getElementById("cityIn").value;
    cityInput = localStorage.getItem("city");

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=imperial&daily.dt&appid=1d78db7b251b897a2d0693c8c96ae579')
        .then(function (response) {
            return response.json();
        })

        .then(function (response) {
            console.log(response);


            var cityInput = document.getElementById("cityIn").value;
            cityInput = localStorage.getItem("city");

            fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&units=imperial&appid=1d78db7b251b897a2d0693c8c96ae579')
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response);
                });
        }

};   