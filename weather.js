let city = document.getElementById('city-input');
let show = document.getElementById('show');

let btn = document.getElementById('city-button');

btn.addEventListener('click', () => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=a901400632ba1ebe09f0417879d7fea4`;


  let request =  new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      //  console.log(data.weather[0].description);
      const title = document.createElement('h3');
      title.textContent = `Current Weather for ${data.name}, ${data.sys.country}`;

      const weatherDesc = document.createElement('h4');
      weatherDesc.textContent = `Weather Description: ${data.weather[0].description}`;

      const icon = document.createElement('img');
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      const temp = document.createElement('h4');
      temp.textContent = `Temperature: ${data.main.temp}`;

      const pressure = document.createElement('h4');
      pressure.textContent = `Pressure: ${data.main.pressure} hPa`;

      const humidity = document.createElement('h4');
      humidity.textContent = `Humidity: ${data.main.humidity} %`;

      const minTemp = document.createElement('h4');
      minTemp.textContent = `Minimum Temperature: ${data.main.temp_min}`;

      const maxTemp = document.createElement('h4');
      maxTemp.textContent = `Maximum Temperature: ${data.main.temp_max}`;

      const windSpeed = document.createElement('h4');
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

      const windDirection = document.createElement('h4');
      windDirection.textContent = `Wind Direction: ${data.wind.deg}`;

      weatherDesc.appendChild(icon);
      show.appendChild(title);
      show.appendChild(weatherDesc);
      show.appendChild(temp);
      show.appendChild(pressure);
      show.appendChild(humidity);
      show.appendChild(minTemp);
      show.appendChild(maxTemp);
      show.appendChild(windSpeed);
      show.appendChild(windDirection);



    }
  }

  //console.log(url);
  //console.log(url);
  request.send();

  city.value = '';
});


