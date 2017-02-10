var array = [5,5,5];


console.log(checkSame(array));


function checkSame(arr){
  var first = arr[0];
  for(i = 0; i < arr.length; i++){
    if (first !== arr[i]){
      return false;
    }
  }
  return true;
}
