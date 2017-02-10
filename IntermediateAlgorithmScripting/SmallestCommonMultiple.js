// find the smalest common multiple,that can be evenly divided by both
// and by all squential numbers in the range between these parameters



function smallestCommons(arr) {
  // sort the array and asign the values
  arr = arr.sort(function(a,b){
    return a-b;
  });

  var array = [];

  for(i = arr[0]; i <= arr[1]; i++){
      array.push(i);
  }
  console.log(array);


function checkSame(arr){
  var first = arr[0];
  for(i = 0; i < arr.length; i++){
    if (first !== arr[i]){
      return false;
    }
  }
  return true;
}


}


smallestCommons([5,7]);
