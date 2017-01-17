

function confirmEnding(str, target) {

var lastLetter =  str.substr(str.length - target.length , target.length);
  if (target === lastLetter){
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "an"));


// Check if a string (first argument, str) ends with the given target string
// (second argument, target).
