var myApiKey = "appid=3c7bd4d9620758de6fb803459151dac0";
var userInputEl = document.querySelector("#user-input");
var buttonEl = document.querySelector("#button");
var searchHistorySectionEl = document.querySelector("#search-history");
var cityDateEl = document.querySelector("#city-and-date");
var tempEl = document.querySelector("temp");
var windEl = document.querySelector("wind");
var humidityEl = document.querySelector("humidity");
var uvIndexEl = document.querySelector("uv-index");
var currentDate = moment().format('l');


$("buttonEl").click(function() {
    fetch("api.openweathermap.org/data/2.5/forecast?q=" + userInputEl.value + "&appid=3b952097e301819bade638b0b75441c5")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => alert("Invalid city name"));
    

    
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
    while(i<5) {
        
        var dayFuture = moment().add(i+1, "days").format("MM/D/YYYY");
        $(headersEL[i]).text(dayFuture);
        i++;
    };
});

// Displays current date
$('#city-and-date').text(moment().format('l'), 100);

function getData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInputEl.value}&units=imperial&appid=${apiKeyWeather}`)
    .then(response => response.json())
    .then(data => {
        city = data['name'];
        temp = data['main']['temp'];
        humidity = data['main']['humidity'];
        wind = data['wind']['speed'];
    })
    .catch(error => alert("Sorry about that!")); 
}
