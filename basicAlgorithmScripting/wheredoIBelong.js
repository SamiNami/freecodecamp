// return the lowest index at with the value (2nd argument) should be inserted at
// (into an array)

function getIndexToIns(arr, num) {

  var unsortedArray = arr;
  unsortedArray.push(num);
  // sort the array from smalest to largest
  var sortedArray = arr.sort(function(a, b){
    return a - b;
  });

  for (i = 0; i < sortedArray.length; i++){
    if (sortedArray[i] === num){
      return i;
    }
  }
}

console.log(getIndexToIns([40, 60, 10], 50));
