// create a rot 13 uncoder
function rot13(str) { // LBH QVQ VG!
var unciphered = "";
  // loop through
  for (i = 0; i < str.length; i++){

    // checking alphabetical with regular expression
    if (/^[a-zA-Z]+/.test(str[i])){
      // convert char to a unicode number
      var utf = str[i].charCodeAt();
      var unc = 0;
      // if the letter is less than the middle of the alphabet
      // make it +13
       if(utf <= 77){
          unc = utf + 13;
       }
       // else make it -13
       else {
          unc = utf - 13;
       }
      var done = String.fromCharCode(unc);
      unciphered += done;
      }
    else{
      unciphered += str[i];
    }

  }
  return unciphered;
}

console.log(rot13("SERR CVMMN"));
