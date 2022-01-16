
var userInputEl = document.querySelector("#user-input");
var buttonEl = document.querySelector("#button");
var searchHistorySectionEl = document.querySelector("#search-history");
var cityDateEl = document.querySelector("#city-and-date");
var tempEl = document.querySelector("temp");
var windEl = document.querySelector("wind");
var humidityEl = document.querySelector("humidity");
var uvIndexEl = document.querySelector("uv-index");
var currentDate = moment().format('MM/D/YYYY');
var sunnyImage = "assets/sun.png";


buttonEl.addEventListener('click', function(){
    fetch("api.openweathermap.org/data/2.5/forecast?q=" + userInputEl.value + "&appid=3b952097e301819bade638b0b75441c5")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => alert("Ivalid city Name"));
});

var headersEL = [
    document.querySelector("#day-one"),
    document.querySelector("#day-two"),
    document.querySelector("#day-three"),
    document.querySelector("#day-four"),
    document.querySelector("#day-five")
];
var fiveDayContainersEL = [
    document.querySelector("#forecastOne"),
    document.querySelector("#forecastTwo"),
    document.querySelector("#forecastThree"),
    document.querySelector("#forecastFour"),
    document.querySelector("#forecastFive")
];
var images = [
    document.querySelector("#image-one"),
    document.querySelector("#image-two"),
    document.querySelector("#image-three"),
    document.querySelector("#image-four"),
    document.querySelector("#image-five")
];


let i = 0;
while(i<5){
    $(fiveDayContainersEL[i]).addClass("cloudy-conditions-theme");
    $(images[i]).attr("src", sunnyImage);
    
    var dayFuture = moment().add(i+1, "days").format("MM/D/YYYY");
    $(headersEL[i]).text(dayFuture);
    i++;
}

//Displays current date
$('#city-and-date').text(moment().format('l'), 100);

// 1. Get UV index to display and get it change colors based on whether it's "favorable, moderate, or severe"
// 2. Use jQuery to add previously searched cities as HTML elements below the <aside> element 
// 3. Get current date to display using moment.js
// 4. Get wind speed to display in the today <div> and in the 5 day forecast <div>s