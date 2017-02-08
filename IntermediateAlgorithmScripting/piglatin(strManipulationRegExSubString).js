// translate a word into piglatin
function translatePigLatin(str) {
  // regex to check if the first letter is a vovel
  if(/[aeiou]/.test(str[0])){
    str += "way";
  }
  else {
    // check how far the consonants go
    for(i=0; i < str.length; i++){
      if(!/[aeiou]/.test(str[i])){
        position = i;
      }
      else{
        break;
      }
    }
    // fix the str
    var letters = str.substr(-str.lenth,i);
    str = str.substr(i);
    str = str + letters +"ay";
  }
  return str;
}

translatePigLatin("glove");
