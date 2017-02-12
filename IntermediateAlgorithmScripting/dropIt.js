// Check if the first element of the provided array is
// true (defined by the provided function), if it's not, drop it.

function dropElements(arr, func) {

  while(func(arr[0]) === false){
    arr.shift();
  }

  console.log("the final array is "+  arr);
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
