// convert the string of binary numbers to english
function binaryAgent(str) {
  // split the string into parts of each letter
  str = str.split(" ");
  // for each letter
  var letters =str.map(function(binary){
    // convert it from binary to an integer
    var letter = parseInt(binary,2);
    // convert the interger to an letter
    return String.fromCharCode(letter);
  });

// join the letters together with no separation
str = letters.join("");
console.log(str);
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
