// find the smalest common multiple,that can be evenly divided by both
// and by all squential numbers in the range between these parameters



function smallestCommons(arr) {
  // sort the array and asign the values
  arr = arr.sort(function(a,b){
    return a - b;
  });

  var array = [];
  // add all the numbers
  for(i = arr[0]; i <= arr[1]; i++){
      array.push(i);
  }

  array = array.sort(function(a,b){
    return b - a;
  });

  console.log(array);
  var newArray = array.slice();
  console.log(newArray);

for(i = 0; i<array.length; i++){

  var addition = newArray[0];

    while(newArray[0] % newArray[i] !== 0){

      newArray[0] += addition;
      console.log(newArray[0]);
    }


    console.log("addition " + newArray[0]);
}

return newArray[0];

}

function checkSame(arr){
  var first = arr[0];
  for(i = 0; i < arr.length; i++){
    if (first !== arr[i]){
      return false;
    }
  }
  return true;
}

smallestCommons([5,7]);
