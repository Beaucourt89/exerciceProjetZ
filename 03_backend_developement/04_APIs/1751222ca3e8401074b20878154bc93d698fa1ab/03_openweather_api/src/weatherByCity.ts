import * as request from "request";

function weatherByCity(city: string): void {
  request(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, response, body) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(body);
        console.log(`${data.main.temp}°C`);
        console.log(data);
      }
    }
  );
}
weatherByCity("Bogota");
// leave lines below for tests to work properly
module.exports = { weatherByCity };
