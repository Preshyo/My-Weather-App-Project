function displayWeatherCondition(response) {

    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}
function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "7499b85e4dfccd06eacfd72c359cdb40"
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);


function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) { hours = `0 ${hours}`; }
    let minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0 ${minutes}`; }
    let dayIndex = date.getDay();
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let day = days[dayIndex];
    return `${day} ${hours}:${minutes}`;
}
let dataElement = document.querySelector("#date");
let currentTime = new Date();
dataElement.innerHTML = formatDate(currentTime);
