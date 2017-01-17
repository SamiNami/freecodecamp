// This code checks if the word is a palindrome
// It removes all non-alphanumberic characters and upper case

function palindrome(str) {
  var alnumStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  var reversedStr = reverseString(alnumStr);

  if (reversedStr === alnumStr){
    return true;
  }
  return false;
}

// reverse string function
function reverseString(str) {
  var array = str.split(""); // splits the string and puts it into the array
  reversedArray = array.reverse(array); // reverses the array
  return reversedArray.join(""); // joins the array into a string
}

console.log(palindrome("eye"));
