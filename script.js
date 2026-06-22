const apiKey = "f302afc05d06388b860d5c7863af5804";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

  const city = document.getElementById("cityInput").value;

  getWeather(city);

});

async function getWeather(city){

  const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try{

    const response = await fetch(url);

    if(!response.ok){
      throw new Error("City not found");
    }

    const data = await response.json();

    console.log(data);
    

    document.getElementById("cityName").innerText =
      data.name;

    document.getElementById("temperature").innerText =
      `Temperature: ${data.main.temp}°C`;

    document.getElementById("description").innerText =
      `Condition: ${data.weather[0].description}`;

    document.getElementById("humidity").innerText =
      `Humidity: ${data.main.humidity}%`;

    document.getElementById("wind").innerText =
      `Wind Speed: ${data.wind.speed} km/h`;

  }
  catch(error){

    alert(error.message);

  }

}







// const apiKey = "284be67c2134166ab6e2958327f70cd7";

// const city = "Mumbai";

// async function getWeather(city) {

//   const url =
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   try {

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     const data = await response.json();

//     console.log(data.name);
//     console.log(data.main.temp);

//   }
//   catch (error) {

//     alert(error.message);

//   }

// }

// getWeather(city);