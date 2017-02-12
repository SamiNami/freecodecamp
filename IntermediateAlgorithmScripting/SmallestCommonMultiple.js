// find the smalest common multiple,that can be evenly divided by both
// and by all squential numbers in the range between these parameters

// so find the smalest common multiple of each number in between the given numbers

function smallestCommons(arr) {
  // sort the array
  arr = arr.sort(function(a,b){
    return a - b;
  });
  // create a new array for all the numbers
  var array = [];
  // add all the numbers from x to y and push them into the new array
  for(i = arr[0]; i <= arr[1]; i++){
      array.push(i);
  }
  // sort the array from largest to smalest
  array = array.sort(function(a,b){
    return b - a;
  });

// for each number
for(i = 0; i < array.length; i++){
  // variable to store the number that should be added
  // always add by the first number in the array
  var addition = array[0];
    // while you can not divie the current number with the first value in the array
    while(array[0] % array[i] !== 0){
      // add the addition variable to the first values
      // eventually the first value will be dividable by the current number
      // and you can move on
      array[0] += addition;
    }


}
// once the loop is finished it will give LCM since the fist number in the array
// can be divded by every other number in the array.
console.log("Leaset common multiple is " + array[0]);

return array[0];

}


smallestCommons([1,5]);
