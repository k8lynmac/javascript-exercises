const convertToCelsius = function(fDegree) {
let celsius = (fDegree-32)/1.8;
if (celsius == 0) {
  return 0;
} else {
let result = parseFloat(celsius.toFixed(1));
return result;
}
}

const convertToFahrenheit = function(cDegree) {
  let fahrenheit=(cDegree*1.8)+32;
  let result = parseFloat(fahrenheit.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
