const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=ed0e5059543a48559fe180503230803&q=" +
    latitude +
    ", " +
    longitude;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather server", undefined);
    } else if (body.error) {
      callback("Unable to find location, Try another search", undefined);
    } else {
      callback(
        undefined,
        "it's " +
          body.current.feelslike_c +
          " celsis, the weather is " +
          body.current.condition.text
      );
    }
  });
};
module.exports = forecast;
