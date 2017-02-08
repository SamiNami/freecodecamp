// serach a string and replace a speified word, keep uppercase
function myReplace(str, before, after) {

//split the string
var arr = str.split(" ");
// go through each word in the array
arr.forEach(function(word){
  // find the word
  if(word === before){
    //create a string for the changed word
    var nAfter = "";
    // if the first letter of the word is upper case
    if(before[0] === before[0].toUpperCase()){
      // save the first letter as upper case
      nAfter = after[0].toUpperCase();
      // add the rest of the letters
      for(i = 1, n = after.length; i < n; i++){
        nAfter += after[i];
      }
      // replace the old word with the fixed new one
      str = str.replace(before, nAfter);
    }
    // same for lowercase
    else if(word[0] === word[0].toLowerCase()){
      nAfter = after[0].toLowerCase();

      for(i = 1, n = after.length; i < n; i++){
        nAfter += after[i];
      }
      str = str.replace(before, nAfter);
    }
  }
});

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/* Looked up a more effiecnt solution after I was done
function myReplace(str, before, after) {
//Create a regular expression object
  var re = new RegExp(before,"gi");
//Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
  //Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
     //Replace the original word with new one
  var  newStr =  str.replace(re,after);

 return newStr;
}
*/
