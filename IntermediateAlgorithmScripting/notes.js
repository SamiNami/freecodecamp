/*
var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(6));
// 720
var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};
console.log(factorial(3));
// 720
*/
/*
var test = "1011101";
binToDec(test);

function binToDec(str){

  num = str.split("");
  var ints = num.map()

  console.log(num);
}
*/
/*
var test = "1010010";
var int = parseInt(test);
console.log(int);
var nonBin = parseInt("01000001",2);
console.log(nonBin);
*/
function counter() {
    var count = 0;
    return function() {
        console.log(count++);
    };
}
var count = counter();

count();
count();
count();
