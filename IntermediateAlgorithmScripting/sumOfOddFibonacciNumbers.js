// return the sum of all odd fibonacci numers that are less than or equal
// to num
function sumFibs(num) {
  // create variables for the two previous numbers in the sequnece
  var first = 1;
  var second = 1;
  // var for the current number
  var i = 0;
  // the sum starts at 2 because we need to add 1+1
  var sum =2;
  // as long as the current number is smaler than NUM
  // important that it keeps looping even if it's = to num
  while(i <= num){
    // this is the fibonacci sequnece
    i = first + second;
    first = second;
    second = i;
    // only add the number to sum it it's uneven
    if (i % 2 !== 0){
    sum += i;
    }
  }
  sum = sum - i;
  return sum;
}

sumFibs(75025);


// looked up a cleaner solution
/*
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);
*/
