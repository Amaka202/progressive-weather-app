const api = {
    key: "de015b2a71212d101bacc45dccf385a5",
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