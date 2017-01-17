
function repeatStringNumTimes(str, num) {

var newStr = "";
for (i = num; i > 0; i--){
  newStr += str;
}
return newStr;

}

console.log(repeatStringNumTimes("abc", 3));

// repeat a given string ( first argument). Return an empty string if num is not a positive
