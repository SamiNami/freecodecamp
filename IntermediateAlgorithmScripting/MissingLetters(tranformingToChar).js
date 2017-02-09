// return the missing letter fron the string, if noting is mising return undefined
function fearNotLetter(str) {
// check if the letters number value is - 2 than the one before it in the String
// it it is, return the number that comes before that number
for (i=1; i <str.length; i++){
  if ((str[i].charCodeAt()) + -2 === str[i-1].charCodeAt()){
    str = str[i].charCodeAt() -1;
    str = String.fromCharCode(str);
    return str;
  }

}
  return undefined;
}

fearNotLetter("abce");
