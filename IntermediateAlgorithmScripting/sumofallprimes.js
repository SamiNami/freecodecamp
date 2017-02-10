// sum up all prime numbers including the provided one
function sumPrimes(num) {
    // prime numbers start from 2
    var current = 2;
    var result = [];
  // keep checking until the current number is the bigger than num
  while (current <= num){
    //only add the current number if check stays as true
    var check = true;
    // check each number up until current
    for(i = 2; i <= current; i++){
      // if the current number can be divided by a number that is not itself...
      // it becomes a false number
      if(current % i ===0 && current !== i) {
        check = false;
      }
    }
    // add the number to the array if it's stays prime
    if(check === true){
      result.push(current);
    }
    current++;
  }

  //calculate the sum of all values in the array
  return result.reduce(function(a,b){
    return a + b;
  }, 0 );

  }
sumPrimes(100);
