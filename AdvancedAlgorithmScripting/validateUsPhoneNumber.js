
function telephoneCheck(str) {
  // fails the string if it contains anythign else than numbers parenthesis or minuses
  if(failBadSymbols(str)){
    console.log("Contains symbols: " + str);

    if(!checkParenthesis(str)){
      return false;
    }

  }
  else{
    return false;
  }


  if(!checkDash(str)){
    return false;
  }




  var myRe = /\d/g;
  var numbersArray = str.match(myRe);

  if(numbersArray.length === 11){
    if(numbersArray[0] === "1"){
      return true;
    }
    else{
      return false;
    }
  }

  else if(numbersArray.length === 10){
    return true;

  }

  return false;

}

function failBadSymbols(str){
    // if the string contains only numbers or parenthesises or minuses or spaces, return true
    if(/^[0-9()-\s]+$/g.test(str)){
      return true;
    }
    // if it contains non numbers
    else{
      console.log(str + " does contain non-numbers");
      return false;

    }

}


//  checks that if there is a ( that there will also be a ) 4 indexes later
// also returns false if there is and ) without a (
function checkParenthesis(str){
  // if the string contains a ( do checks, else return true
  if(str.search(/[(]/) !== -1){
    // if there is a ( in the first index
    var position = str.search(/[(]/);
    if(str.search(/[)]/) === position + 4){
      return true;
    }
    else{
      console.log("There is a ( but no ) 4 spots after it");
      return false;
    }
  }
  // if there is a ) without and ( return false...
  else if(str.search(/[)]/) !== -1){
    console.log("The string has a ) but no (");
    return false;
  }
  else{
    return true;
  }
}

function checkDash(str){
  // if the str does not have a - simply return true
  if(str.search(/[-]/) === -1){
    return true;
  }
  // if it does have a -
  else{
    if(str.search(/[-]/) === 0){
      console.log("You can not use - as the first letter in your string");
      return false;
    }
    else{
      return true;
    }
  }
}

console.log(telephoneCheck("(1 4)56 -789 4444"));
