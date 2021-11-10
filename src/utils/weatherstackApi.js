const request = require("postman-request");
require("dotenv").config();

const weatherForecast = (long, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK}&query=${long},${lat}`; //units=f(f=fahernheit)
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("unable to connect", undefined);
    } else if (res.body.error === "") {
      callback("wrong input", undefined);
    } else {
      const { weather_descriptions, temperature, precip } = res.body.current;
      callback(
        undefined,
        `${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is a ${precip}% chance of rain.`
      );
    }
  });
};
module.exports = weatherForecast;
