// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
// get the max and min value from the array, and create a new array
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var result = [];
// from min to max push a int into the array
while (min <= max){
  result.push(min);
  min++;
}
//calculate the sum of all values in the array
return result.reduce(function(a,b){
  return a + b;
}, 0 );

}

sumAll([1, 4]);
