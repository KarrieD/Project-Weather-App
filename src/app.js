function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "210412f30f491d1c32937a20641fbe44";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
