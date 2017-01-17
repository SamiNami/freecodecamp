
function largestOfFour(arr) {

  var max = 0;
  var newArray = [];

  for (i = 0; i < arr.length; i++){
    for (j = 0; j < 4; j++){
      if (arr[i][j] > max){
        max = arr[i][j];
        }
      }
      newArray.push(max);
      max = 0;
  }
return newArray;

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


// return the largest number from each subarray
