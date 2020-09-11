const api = {
    key: "6a0952872cc5de00310c63ede73d19a8",
    baseurl: " http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
} 

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
} 

function displayResults (weather) {
    console.log(weather); 
    let intro = document.querySelector('#intro');
    intro.innerText = 'Weather Information for';
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}:`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp_info = document.querySelector('#temp-info');
    temp_info.innerText = 'Current Temperature:';
    let temp = document.querySelector('.current .temp')
    temp.innerText = `${Math.round(weather.main.temp)}°C`;

    let weather_info = document.querySelector('#weather-info');
    weather_info.innerText = 'Weather Description:';
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].description.toUpperCase();

    let min_info = document.querySelector('#min-info');
    min_info.innerText = 'Max and Min Temperature:';
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}


const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", " Saturday "]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }



// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("sw.js").then(registration => {
//         console.log("sw registered");
//         console.log(registration);
//     }).catch(error => {
//         console.log("sw registered failed");
//         console.log(registration);
//     })
// }else{
    
// }