var add = function(number1, number2) {
   return number1 + number2;
};

var number1 = parseInt(prompt("Pick any number:"));
var number2 = parseInt(prompt("Pick any other number:"));

alert(add(number1, number2));

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter number to subtract from the first number:"));

alert(subtract(number1, number2));

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Choose a number:"));
var number2 = parseInt(prompt("Choose a number to multiply by the first:"));

alert(multiply(number1, number2));

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Choose a number to divide the first number by:"));

alert(divide(number1, number2));
