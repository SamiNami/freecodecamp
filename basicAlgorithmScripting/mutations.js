// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array

function mutation(arr) {

  for (i=0; i < arr[1].length;i++){

    letter = arr[1][i].toLowerCase();
    value = arr[0].toLowerCase().indexOf(letter);

    if (0 > value){
      return false;
    }

  }

  return true;
}

console.log(mutation(["zyx", "zy"]));
