// make the string into spinal case all-lower-case-joined-by-dashes


function spinalCase(str) {
  // new string
  var stringer = "";
  // add the first letter to the string
  stringer += str[0];
  //loop through
  for(i = 1; i < str.length; i++){
    //of the current letter is uppercase
    if(/[A-Z]/.test(str[i])){
      // and if the letter before it is a space(or underscore it seems)
      if(str[i - 1] !== " "){
        // add a dash + the current letter to stringr
        stringer += "-" +str[i];
      }
      // else just add the letter
      else{
        stringer += str[i];
      }
    }
    else{
      stringer += str[i];
    }
  }
  // replace all spaces with a dash, and remove all underscores
  // also set it to lowercase
  stringer = stringer.replace(/ /g,"-").replace(/_/g,"").toLowerCase();
  return stringer;

}
spinalCase('The_Andy_Griffith_Show');



/* Way better solution I looked up after I was done
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');
*/
