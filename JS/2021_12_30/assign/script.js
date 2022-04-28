let data_div = document.getElementById("data_div");
let I_temp = document.getElementById("I-temp");
let max_hum_wind = document.getElementById("max-hum-wind");
let in_place = document.getElementById("in-place");
let main_div = document.getElementById("main_div");
let mapDis = document.getElementById("mapDis");
let daily_arr = document.getElementById("daily_arr");
async function getWeather() {
  try {
    let city = document.getElementById("cityName").value;
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4242e32c678f16e55803d15f3d9abd6f&units=metric`
    );

    let data = await response.json();
    showWeather(data);
    longLat(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function showWeather(weather) {
  in_place.textContent = "";
  max_hum_wind.textContent = "";

  let image = document.createElement("img");
  image.src = "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png";

  let temp = document.getElementById("curTemp");
  temp.innerText = `${weather.main.temp} °C`;

  let max_temp = document.createElement("div");
  max_temp.innerText = `Max-Temp: ${weather.main.temp_max} °C`;

  let humidity = document.createElement("div");
  humidity.innerText = `Humidity: ${weather.main.humidity}%`;

  let wind = document.createElement("div");
  wind.innerText = `wind: ${weather.wind.speed}km/hr`;

  let area = document.createElement("div");
  area.innerHTML = weather.name;

  let sunrise = document.createElement("p");
  let rise = weather.sys.sunrise;
  riseRise(rise);
  async function riseRise(date) {
    try {
      let response = await fetch(
        `https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${date}`
      );

      let dat = await response.json();
      sunrise.innerHTML = `Sunrise: ${dat}`;
    } catch (err) {
      console.log(err);
    }
  }

  let sunset = document.createElement("p");
  let set = weather.sys.sunset;
  riseSet(set);
  async function riseSet(date) {
    try {
      let response = await fetch(
        `https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${date}`
      );

      let dat = await response.json();
      sunset.innerHTML = `Sunset: ${dat}`;
    } catch (err) {
      console.log(err);
    }
  }

  I_temp.append(image, temp);
  max_hum_wind.append(max_temp, humidity, wind);
  data_div.append(I_temp, max_hum_wind);

  in_place.append(area, sunrise, sunset);
  main_div.append(data_div, in_place);

  // let humidity = document.createElement("div");
  // humidity.innerText = `Humidity: ${weather.main.humidity}`;
  // data_div.append(temp, pressure, humidity);

  mapDis.innerHTML = `<iframe
        id="frame"
        width="80%"
        height="450"
        style="border: 0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjYBGxVSAaSf4kbx7Ki-BlAKrQctsQCGg
    &q=${weather.name}"
      >
      </iframe>`;
}

async function longLat(latlon) {
  try {
    let lat = latlon.coord.lat;
    let lon = latlon.coord.lon;
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=4242e32c678f16e55803d15f3d9abd6f`
    );

    let data = await response.json();
    //   showWeather(data);
    sevenDay(data);
  } catch (err) {
    console.log(err);
  }
}

// async function riseSet(date) {
//   try {
//     let response = await fetch(
//       `https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${date}`
//     );

//     let dat = await response.json();
//     //   return dat;
//     console.log(dat);
//   } catch (err) {
//     console.log(err);
//   }
// }

function sevenDay(day_arr) {
  document.getElementById("daily_arr").innerHTML = "";
  let arr = day_arr.daily;
  arr.map(function (ele) {
    let day_div = document.createElement("div");
    let date = document.createElement("div");
    let day = ele.dt;
    dateChange(day);
    async function dateChange(ele) {
      try {
        let response = await fetch(
          `https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${ele}`
        );
        let data = await response.json();
        date.innerHTML = data;
      } catch (error) {
        console.log(error);
      }
    }

    let image = document.createElement("img");
    image.src = "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png";

    let h3 = document.createElement("h3");
    h3.innerHTML = `${ele.temp.max}°c`;

    let h4 = document.createElement("h4");
    h4.innerHTML = `${ele.temp.min}°c`;

    day_div.append(date, image, h3, h4);
    daily_arr.append(day_div);
  });
}
//   async function timeStamp(data) {
//     try {
//       let date = data.current.dt;
//       let response = await fetch(
//         `https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${date}`
//       );

//       let dat = await response.json();
//       console.log(dat);
//     } catch (err) {
//       console.log(err);
//     }
//   }
