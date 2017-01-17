
function truncateString(str, num) {
  var tString = "";
   if (str.length > num){
     if (num <= 3){
       tString = str.slice(0,num);
       tString += "...";
     }
     else{
       tString = str.slice(0,num -3);
       tString += "...";
     }
     return tString;
   }
   return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));

// truncates a string if num is longer than str.length
// if num is <= 3 then the ... does not count towards the string length
