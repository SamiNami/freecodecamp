function reverseString(str) {
  var array = str.split(""); // splits the string and puts it into the array
  reversedArray = array.reverse(array); // reverses the array
  return reversedArray.join(""); // joins the array into a string
}

console.log(reverseString("hello"));
