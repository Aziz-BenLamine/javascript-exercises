const convertToCelsius = function(temperatureF) {
  let temperatureC = (temperatureF - 32) / 1.8;
  return Math.round(temperatureC * 10) / 10;
};

const convertToFahrenheit = function(temperatureC) {
  let temperatureF = temperatureC * 1.8 +32;
  return Math.round(temperatureF *10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
