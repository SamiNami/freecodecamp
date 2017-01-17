// create a rot 13 cipher/uncoder
function rot13(str) { // LBH QVQ VG!
// loop through
var unciphered = "";
  for (i = 0; i < str.length; i++){

    // checking alphabetical with regular expression
    if (/^[a-zA-Z]+/.test(str[i])){
      var utf = str[i].charCodeAt();
      console.log(utf);
      var unc = utf - 13;
      console.log(unc);
      var done = String.fromCharCode(unc);
      console.log(done);
      unciphered += done;
      }
    else{
      unciphered += str[i];
    }

  }
  console.log(unciphered);

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//regular expression
