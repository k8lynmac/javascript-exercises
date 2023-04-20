const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let end = 0;
	for (let i=0; i<array.length; i++) {
    end += array[i];
  }
  return end;
};

const multiply = function(array) {
  let end = 1;
	for (let i=0; i<array.length; i++) {
    end = end * array[i];
  }
  return end;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let fact=1;
  for(let i=0; i < a; i++) {
    fact = fact*(a-i);
    if (a === 0) {
      fact = 1;
      return fact;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
