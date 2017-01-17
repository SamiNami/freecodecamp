// finds the longest word in a string and gives the response in a number
function findLongestWord(str) {
  var newArray = str.split(" ").map(function(x){
   return x.length;
  });

  newArray.sort(function(a,b){
  return b - a;
  });

  return newArray[0];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
