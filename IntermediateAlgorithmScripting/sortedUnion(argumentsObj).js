// Write a function that takes two or more arrays of uniques values in the order of
//the original provided arrays

function uniteUnique(arr) {
// create a array for the arguemnts, and an empty one to fill up
  var nArr = [];
  var args = Array.from(arguments);
  // flatten the array
  args = args.reduce(function(a,b){
    return a.concat(b);
  });

// for each argument, check it exists in the nArr, if it does not, add it.
for(i = 0; i < args.length; i++){
  if(nArr.indexOf(args[i]) === -1){
    nArr.push(args[i]);
  }
}
return nArr;
}

uniteUnique([1, 3, 2,], [5, 2, 1, 4], [2, 1]);
