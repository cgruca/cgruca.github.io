const appKey = "7fe975fb7df1ed144e748f990b3f2453";

let searchInput = document.getElementById("search-txt");
let checkbox = document.querySelector("input[type=checkbox]");
let system = "metric";
let date = new Date();
let weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let cityName = document.getElementsByClassName("city-top");
let icon = document.getElementById("icon");
let mini_icon = document.getElementById("mini-icon");

let info_main = document.getElementById("info-main");
let info_hourly = document.getElementById("info-hourly");

let c_temperature = document.getElementById("c-temp");
let c_humidity = document.getElementById("c-humidity-div");
let c_wind = document.getElementById("c-wind-div");

let h_temperature = document.getElementById("h-temp");
let h_humidity = document.getElementById("h-humidity-div");
let h_wind = document.getElementById("h-wind-div");

let h_temperature1 = document.getElementById("h-temp-1");
let h_humidity1 = document.getElementById("h-humidity-div-1");
let h_wind1 = document.getElementById("h-wind-div-1");
let h_icon1 = document.getElementById("h-icon1");
let h_time1 = document.getElementById("h-time-1");

let h_temperature2 = document.getElementById("h-temp-2");
let h_humidity2 = document.getElementById("h-humidity-div-2");
let h_wind2 = document.getElementById("h-wind-div-2");
let h_icon2 = document.getElementById("h-icon2");
let h_time2 = document.getElementById("h-time-2");

let h_temperature3 = document.getElementById("h-temp-3");
let h_humidity3 = document.getElementById("h-humidity-div-3");
let h_wind3 = document.getElementById("h-wind-div-3");
let h_icon3 = document.getElementById("h-icon3");
let h_time3 = document.getElementById("h-time-3");

let h_temperature4 = document.getElementById("h-temp-4");
let h_humidity4 = document.getElementById("h-humidity-div-4");
let h_wind4 = document.getElementById("h-wind-div-4");
let h_icon4 = document.getElementById("h-icon4");
let h_time4 = document.getElementById("h-time-4");

let h_temperature5 = document.getElementById("h-temp-5");
let h_humidity5 = document.getElementById("h-humidity-div-5");
let h_wind5 = document.getElementById("h-wind-div-5");
let h_icon5 = document.getElementById("h-icon5");
let h_time5 = document.getElementById("h-time-5");

let h_temperature6 = document.getElementById("h-temp-6");
let h_humidity6 = document.getElementById("h-humidity-div-6");
let h_wind6 = document.getElementById("h-wind-div-6");
let h_icon6 = document.getElementById("h-icon6");
let h_time6 = document.getElementById("h-time-6");

let h_temperature7 = document.getElementById("h-temp-7");
let h_humidity7 = document.getElementById("h-humidity-div-7");
let h_wind7 = document.getElementById("h-wind-div-7");
let h_icon7 = document.getElementById("h-icon7");
let h_time7 = document.getElementById("h-time-7");

let h_temperature8 = document.getElementById("h-temp-8");
let h_humidity8 = document.getElementById("h-humidity-div-8");
let h_wind8 = document.getElementById("h-wind-div-8");
let h_icon8 = document.getElementById("h-icon8");
let h_time8 = document.getElementById("h-time-8");

let graph = document.getElementById("graph");

let f_temperature1 = document.getElementById("f-temp-1");
let f_humidity1 = document.getElementById("f-humidity-div-1");
let f_wind1 = document.getElementById("f-wind-div-1");
let f_icon1 = document.getElementById("f-icon1");
let weekday1 = document.getElementById("weekday1");
let info_day1 = document.getElementById("info-5day-1");

let f_temperature2 = document.getElementById("f-temp-2");
let f_humidity2 = document.getElementById("f-humidity-div-2");
let f_wind2 = document.getElementById("f-wind-div-2");
let f_icon2 = document.getElementById("f-icon2");
let weekday2 = document.getElementById("weekday2");
let info_day2 = document.getElementById("info-5day-2");

let f_temperature3 = document.getElementById("f-temp-3");
let f_humidity3 = document.getElementById("f-humidity-div-3");
let f_wind3 = document.getElementById("f-wind-div-3");
let f_icon3 = document.getElementById("f-icon3");
let weekday3 = document.getElementById("weekday3");
let info_day3 = document.getElementById("info-5day-3");

let f_temperature4 = document.getElementById("f-temp-4");
let f_humidity4 = document.getElementById("f-humidity-div-4");
let f_wind4 = document.getElementById("f-wind-div-4");
let f_icon4 = document.getElementById("f-icon4");
let weekday4 = document.getElementById("weekday4");
let info_day4 = document.getElementById("info-5day-4");

let f_temperature5 = document.getElementById("f-temp-5");
let f_humidity5 = document.getElementById("f-humidity-div-5");
let f_wind5 = document.getElementById("f-wind-div-5");
let f_icon5 = document.getElementById("f-icon5");
let weekday5 = document.getElementById("weekday5");
let info_day5 = document.getElementById("info-5day-5");

searchInput.addEventListener("keyup", enterPressed);

/*
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      console.log("toggled");
      console.log(c_temperature.innerHTML+20);
        c_temperature.innerHTML = (c_temperature.innerHTML * 9 / 5 + 32) + " F°" + "<br/>" + "Temp";
    } else {
        c_temperature.innerHTML = ((c_temperature.innerHTML - 32) * 5 / 9) + " C°" + "<br/>" + "Temp";
    }
});
*/

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      console.log("toggled");
      system = "imperial";
      fetchWeatherInfoImperial();
      fetchForecastInfoImperial();
    } else {
      system = "metric";
      fetchWeatherInfoMetric();
      fetchForecastInfoMetric();
    }
});

function enterPressed(event) {
  if (event.key === "Enter") {
    fetchWeatherInfoMetric();
    fetchForecastInfoMetric();
  }
}

function fetchWeatherInfoImperial() {
  if (searchInput.value === "") {

  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=imperial" + "&appid="+appKey;
   httpRequestAsync(searchLink, weatherData);
  }
 }

 function fetchWeatherInfoMetric() {
   if (searchInput.value === "") {

   }else {
     let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=metric" + "&appid="+appKey;
    httpRequestAsync(searchLink, weatherData);
   }
  }

function fetchForecastInfoImperial() {
  if (searchInput.value === "") {

  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + "&units=imperial" + "&appid="+appKey;
   httpRequestAsync(searchLink, forecastData);
  }
 }

 function fetchForecastInfoMetric() {
   if (searchInput.value === "") {

   }else {
     let searchLink = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + "&units=metric" + "&appid="+appKey;
    httpRequestAsync(searchLink, forecastData);
   }
  }

function weatherData(response) {
  console.log("retrieved from openweather api");
  console.log(response);
  console.log(system);
  let jsonObject = JSON.parse(response);
  console.log(cityName);
  for (var i=0; i < cityName.length; i++) {
    cityName[i].innerHTML = jsonObject.name;
  }
  icon.src = "images/" + jsonObject.weather[0].icon + ".png";
  mini_icon.src = "images/" + jsonObject.weather[0].icon + ".png";

  c_humidity.innerHTML = jsonObject.main.humidity + "%" + "<br/>" + "Humidity";
  h_humidity.innerHTML = "Humidity: " + jsonObject.main.humidity + "%";

  info_main.innerHTML = jsonObject.weather[0].description;
  info_hourly.innerHTML = jsonObject.weather[0].description;

  if (system == "metric") {
    c_temperature.innerHTML = parseInt(jsonObject.main.temp) + "°C" + "<br/>" + "Temp";
    c_wind.innerHTML = jsonObject.wind.speed + " m/s" + "<br/>" + "Wind";

    h_temperature.innerHTML = "Temp: " + parseInt(jsonObject.main.temp) + "°C";
    h_wind.innerHTML = "Wind: " + jsonObject.wind.speed + " m/s";
  }

  if (system == "imperial") {
    c_temperature.innerHTML = parseInt(jsonObject.main.temp) + "°F" + "<br/>" + "Temp";
    c_wind.innerHTML = jsonObject.wind.speed + " mph" + "<br/>" + "Wind";

    h_temperature.innerHTML = "Temp: " + parseInt(jsonObject.main.temp) + "°F";
    h_wind.innerHTML = "Wind: " + jsonObject.wind.speed + " mph";
  }
}

function forecastData(response) {
  console.log("retrieved forecast data");
  console.log(response);
  console.log(system);
  let jsonObject = JSON.parse(response);

  if (system == "metric") {
    //HOURLY********************************************************************************
    //hour bar 1
    h_icon1.src = "images/" + jsonObject.list[0].weather[0].icon + ".png";

    h_temperature1.innerHTML = parseInt(jsonObject.list[0].main.temp) + "°C";
    h_humidity1.innerHTML = parseInt(jsonObject.list[0].main.humidity) + "%";
    h_wind1.innerHTML = parseInt(jsonObject.list[0].wind.speed) + "m/s";

    date = new Date(jsonObject.list[0].dt_txt + '	UTC');
    h_time1.innerHTML = date.getHours() + ":00";

    //hour bar 2
    h_icon2.src = "images/" + jsonObject.list[1].weather[0].icon + ".png";

    h_temperature2.innerHTML = parseInt(jsonObject.list[1].main.temp) + "°C";
    h_humidity2.innerHTML = parseInt(jsonObject.list[1].main.humidity) + "%";
    h_wind2.innerHTML = parseInt(jsonObject.list[1].wind.speed) + "m/s";

    date = new Date(jsonObject.list[1].dt_txt + '	UTC');
    h_time2.innerHTML = date.getHours() + ":00";

    //hour bar 3
    h_icon3.src = "images/" + jsonObject.list[2].weather[0].icon + ".png";

    h_temperature3.innerHTML = parseInt(jsonObject.list[2].main.temp) + "°C";
    h_humidity3.innerHTML = parseInt(jsonObject.list[2].main.humidity) + "%";
    h_wind3.innerHTML = parseInt(jsonObject.list[2].wind.speed) + "m/s";

    date = new Date(jsonObject.list[2].dt_txt + '	UTC');
    h_time3.innerHTML = date.getHours() + ":00";

    //hour bar 4
    h_icon4.src = "images/" + jsonObject.list[3].weather[0].icon + ".png";

    h_temperature4.innerHTML = parseInt(jsonObject.list[3].main.temp) + "°C";
    h_humidity4.innerHTML = parseInt(jsonObject.list[3].main.humidity) + "%";
    h_wind4.innerHTML = parseInt(jsonObject.list[3].wind.speed) + "m/s";

    date = new Date(jsonObject.list[3].dt_txt + '	UTC');
    h_time4.innerHTML = date.getHours() + ":00";

    //hour bar 5
    h_icon5.src = "images/" + jsonObject.list[4].weather[0].icon + ".png";

    h_temperature5.innerHTML = parseInt(jsonObject.list[4].main.temp) + "°C";
    h_humidity5.innerHTML = parseInt(jsonObject.list[4].main.humidity) + "%";
    h_wind5.innerHTML = parseInt(jsonObject.list[4].wind.speed) + "m/s";

    date = new Date(jsonObject.list[4].dt_txt + '	UTC');
    h_time5.innerHTML = date.getHours() + ":00";

    //hour bar 6
    h_icon6.src = "images/" + jsonObject.list[5].weather[0].icon + ".png";

    h_temperature6.innerHTML = parseInt(jsonObject.list[5].main.temp) + "°C";
    h_humidity6.innerHTML = parseInt(jsonObject.list[5].main.humidity) + "%";
    h_wind6.innerHTML = parseInt(jsonObject.list[5].wind.speed) + "m/s";

    date = new Date(jsonObject.list[5].dt_txt + '	UTC');
    h_time6.innerHTML = date.getHours() + ":00";

    //hour bar 7
    h_icon7.src = "images/" + jsonObject.list[6].weather[0].icon + ".png";

    h_temperature7.innerHTML = parseInt(jsonObject.list[6].main.temp) + "°C";
    h_humidity7.innerHTML = parseInt(jsonObject.list[6].main.humidity) + "%";
    h_wind7.innerHTML = parseInt(jsonObject.list[6].wind.speed) + "m/s";

    date = new Date(jsonObject.list[6].dt_txt + '	UTC');
    h_time7.innerHTML = date.getHours() + ":00";

    //hour bar 8
    h_icon8.src = "images/" + jsonObject.list[7].weather[0].icon + ".png";

    h_temperature8.innerHTML = parseInt(jsonObject.list[7].main.temp) + "°C";
    h_humidity8.innerHTML = parseInt(jsonObject.list[7].main.humidity) + "%";
    h_wind8.innerHTML = parseInt(jsonObject.list[7].wind.speed) + "m/s";

    date = new Date(jsonObject.list[7].dt_txt + '	UTC');
    h_time8.innerHTML = date.getHours() + ":00";

    //5 DAY************************************************************************************
    //weekday bar 1
    date = new Date(jsonObject.list[0].dt_txt + '	UTC');
    weekday1.innerHTML = weekday[date.getDay()];
    f_icon1.src = "images/" + jsonObject.list[0].weather[0].icon + ".png";

    f_temperature1.innerHTML = parseInt(jsonObject.list[0].main.temp) + "°C" + "<br/>" + "Temp";
    f_humidity1.innerHTML = parseInt(jsonObject.list[0].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind1.innerHTML = parseInt(jsonObject.list[0].wind.speed) + " m/s" + "<br/>" + "Wind";

    //weekday bar 2
    date = new Date(jsonObject.list[8].dt_txt + '	UTC');
    weekday2.innerHTML = weekday[date.getDay()];
    f_icon2.src = "images/" + jsonObject.list[8].weather[0].icon + ".png";

    f_temperature2.innerHTML = parseInt(jsonObject.list[8].main.temp) + "°C" + "<br/>" + "Temp";
    f_humidity2.innerHTML = parseInt(jsonObject.list[8].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind2.innerHTML = parseInt(jsonObject.list[8].wind.speed) + " m/s" + "<br/>" + "Wind";

    //weekday bar 3
    date = new Date(jsonObject.list[16].dt_txt + '	UTC');
    weekday3.innerHTML = weekday[date.getDay()];
    f_icon3.src = "images/" + jsonObject.list[16].weather[0].icon + ".png";

    f_temperature3.innerHTML = parseInt(jsonObject.list[16].main.temp) + "°C" + "<br/>" + "Temp";
    f_humidity3.innerHTML = parseInt(jsonObject.list[16].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind3.innerHTML = parseInt(jsonObject.list[16].wind.speed) + " m/s" + "<br/>" + "Wind";

    //weekday bar 4
    date = new Date(jsonObject.list[24].dt_txt + '	UTC');
    weekday4.innerHTML = weekday[date.getDay()];
    f_icon4.src = "images/" + jsonObject.list[24].weather[0].icon + ".png";

    f_temperature4.innerHTML = parseInt(jsonObject.list[24].main.temp) + "°C" + "<br/>" + "Temp";
    f_humidity4.innerHTML = parseInt(jsonObject.list[24].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind4.innerHTML = parseInt(jsonObject.list[24].wind.speed) + " m/s" + "<br/>" + "Wind";

    //weekday bar 5
    date = new Date(jsonObject.list[32].dt_txt + '	UTC');
    weekday5.innerHTML = weekday[date.getDay()];
    f_icon5.src = "images/" + jsonObject.list[32].weather[0].icon + ".png";

    f_temperature5.innerHTML = parseInt(jsonObject.list[32].main.temp) + "°C" + "<br/>" + "Temp";
    f_humidity5.innerHTML = parseInt(jsonObject.list[32].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind5.innerHTML = parseInt(jsonObject.list[32].wind.speed) + " m/s" + "<br/>" + "Wind";


  }

  if (system == "imperial") {

    //hour bar 1
    h_icon1.src = "images/" + jsonObject.list[0].weather[0].icon + ".png";

    h_temperature1.innerHTML = parseInt(jsonObject.list[0].main.temp) + "°F";
    h_humidity1.innerHTML = parseInt(jsonObject.list[0].main.humidity) + "%";
    h_wind1.innerHTML = parseInt(jsonObject.list[0].wind.speed) + "mph";

    date = new Date(jsonObject.list[0].dt_txt + '	UTC');
    h_time1.innerHTML = date.getHours() + ":00";

    //hour bar 2
    h_icon2.src = "images/" + jsonObject.list[1].weather[0].icon + ".png";

    h_temperature2.innerHTML = parseInt(jsonObject.list[1].main.temp) + "°F";
    h_humidity2.innerHTML = parseInt(jsonObject.list[1].main.humidity) + "%";
    h_wind2.innerHTML = parseInt(jsonObject.list[1].wind.speed) + "mph";

    date = new Date(jsonObject.list[1].dt_txt + '	UTC');
    h_time2.innerHTML = date.getHours() + ":00";

    //hour bar 3
    h_icon3.src = "images/" + jsonObject.list[2].weather[0].icon + ".png";

    h_temperature3.innerHTML = parseInt(jsonObject.list[2].main.temp) + "°F";
    h_humidity3.innerHTML = parseInt(jsonObject.list[2].main.humidity) + "%";
    h_wind3.innerHTML = parseInt(jsonObject.list[2].wind.speed) + "mph";

    date = new Date(jsonObject.list[2].dt_txt + '	UTC');
    h_time3.innerHTML = date.getHours() + ":00";

    //hour bar 4
    h_icon4.src = "images/" + jsonObject.list[3].weather[0].icon + ".png";

    h_temperature4.innerHTML = parseInt(jsonObject.list[3].main.temp) + "°F";
    h_humidity4.innerHTML = parseInt(jsonObject.list[3].main.humidity) + "%";
    h_wind4.innerHTML = parseInt(jsonObject.list[3].wind.speed) + "mph";

    date = new Date(jsonObject.list[3].dt_txt + '	UTC');
    h_time4.innerHTML = date.getHours() + ":00";

    //hour bar 5
    h_icon5.src = "images/" + jsonObject.list[4].weather[0].icon + ".png";

    h_temperature5.innerHTML = parseInt(jsonObject.list[4].main.temp) + "°F";
    h_humidity5.innerHTML = parseInt(jsonObject.list[4].main.humidity) + "%";
    h_wind5.innerHTML = parseInt(jsonObject.list[4].wind.speed) + "mph";

    date = new Date(jsonObject.list[4].dt_txt + '	UTC');
    h_time5.innerHTML = date.getHours() + ":00";

    //hour bar 6
    h_icon6.src = "images/" + jsonObject.list[5].weather[0].icon + ".png";

    h_temperature6.innerHTML = parseInt(jsonObject.list[5].main.temp) + "°F";
    h_humidity6.innerHTML = parseInt(jsonObject.list[5].main.humidity) + "%";
    h_wind6.innerHTML = parseInt(jsonObject.list[5].wind.speed) + "mph";

    date = new Date(jsonObject.list[5].dt_txt + '	UTC');
    h_time6.innerHTML = date.getHours() + ":00";

    //hour bar 7
    h_icon7.src = "images/" + jsonObject.list[6].weather[0].icon + ".png";

    h_temperature7.innerHTML = parseInt(jsonObject.list[6].main.temp) + "°F";
    h_humidity7.innerHTML = parseInt(jsonObject.list[6].main.humidity) + "%";
    h_wind7.innerHTML = parseInt(jsonObject.list[6].wind.speed) + "mph";

    date = new Date(jsonObject.list[6].dt_txt + '	UTC');
    h_time7.innerHTML = date.getHours() + ":00";

    //hour bar 8
    h_icon8.src = "images/" + jsonObject.list[7].weather[0].icon + ".png";

    h_temperature8.innerHTML = parseInt(jsonObject.list[7].main.temp) + "°F";
    h_humidity8.innerHTML = parseInt(jsonObject.list[7].main.humidity) + "%";
    h_wind8.innerHTML = parseInt(jsonObject.list[7].wind.speed) + "mph";

    date = new Date(jsonObject.list[7].dt_txt + '	UTC');
    h_time8.innerHTML = date.getHours() + ":00";

    //5 DAY************************************************************************************
    //weekday bar 1
    date = new Date(jsonObject.list[0].dt_txt + '	UTC');
    weekday1.innerHTML = weekday[date.getDay()];
    f_icon1.src = "images/" + jsonObject.list[0].weather[0].icon + ".png";

    f_temperature1.innerHTML = parseInt(jsonObject.list[0].main.temp) + "°F" + "<br/>" + "Temp";
    f_humidity1.innerHTML = parseInt(jsonObject.list[0].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind1.innerHTML = parseInt(jsonObject.list[0].wind.speed) + " mph" + "<br/>" + "Wind";

    //weekday bar 2
    date = new Date(jsonObject.list[8].dt_txt + '	UTC');
    weekday2.innerHTML = weekday[date.getDay()];
    f_icon2.src = "images/" + jsonObject.list[8].weather[0].icon + ".png";

    f_temperature2.innerHTML = parseInt(jsonObject.list[8].main.temp) + "°F" + "<br/>" + "Temp";
    f_humidity2.innerHTML = parseInt(jsonObject.list[8].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind2.innerHTML = parseInt(jsonObject.list[8].wind.speed) + " mph" + "<br/>" + "Wind";

    //weekday bar 3
    date = new Date(jsonObject.list[16].dt_txt + '	UTC');
    weekday3.innerHTML = weekday[date.getDay()];
    f_icon3.src = "images/" + jsonObject.list[16].weather[0].icon + ".png";

    f_temperature3.innerHTML = parseInt(jsonObject.list[16].main.temp) + "°F" + "<br/>" + "Temp";
    f_humidity3.innerHTML = parseInt(jsonObject.list[16].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind3.innerHTML = parseInt(jsonObject.list[16].wind.speed) + " mph" + "<br/>" + "Wind";

    //weekday bar 4
    date = new Date(jsonObject.list[24].dt_txt + '	UTC');
    weekday4.innerHTML = weekday[date.getDay()];
    f_icon4.src = "images/" + jsonObject.list[24].weather[0].icon + ".png";

    f_temperature4.innerHTML = parseInt(jsonObject.list[24].main.temp) + "°F" + "<br/>" + "Temp";
    f_humidity4.innerHTML = parseInt(jsonObject.list[24].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind4.innerHTML = parseInt(jsonObject.list[24].wind.speed) + " mph" + "<br/>" + "Wind";

    //weekday bar 5
    date = new Date(jsonObject.list[32].dt_txt + '	UTC');
    weekday5.innerHTML = weekday[date.getDay()];
    f_icon5.src = "images/" + jsonObject.list[32].weather[0].icon + ".png";

    f_temperature5.innerHTML = parseInt(jsonObject.list[32].main.temp) + "°F" + "<br/>" + "Temp";
    f_humidity5.innerHTML = parseInt(jsonObject.list[32].main.humidity) + "%" + "<br/>" + "Humidity";
    f_wind5.innerHTML = parseInt(jsonObject.list[32].wind.speed) + " mph" + "<br/>" + "Wind";

  }
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            callback(httpRequest.responseText);
          }
        else if (httpRequest.readyState == 4 && httpRequest.status == 404) {
          alert("Please input a valid city name");
        }


    }

    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();
}
