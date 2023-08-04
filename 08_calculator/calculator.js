const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	sumCalc = 0;
  for (let element of array){
    sumCalc += element;
  }
  return sumCalc;
};

const multiply = function(array) {
  mulCalc = 1;
  for (let element of array){
    mulCalc *= element;
  }
  return mulCalc;
};

const power = function(num, expo) {
  let result = 1 ,i = 1;
  while(i <=expo){
    result *= num;
    i += 1;
  }
  return result;
};

const factorial = function(num) {
	let factCalc = 1, i = 2;
  while(i <= num){
    factCalc *= i;
    i += 1;
  }
  return factCalc;
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
