// Create a fucntion that returns the first element in an array that passes
// a truth test (the 2nd argument)

function findElement(arr, func) {
  // filter creates a new array with all the value that pass the functions
  // requirements
  var filtered = arr.filter(func);
  return filtered[0];
}


findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
