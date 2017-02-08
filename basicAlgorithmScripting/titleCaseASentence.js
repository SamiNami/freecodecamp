
function titleCase(str) {
  var array =str.split(" ");

  var newArray = array.map(function(x){
    // slice cuts away the first letter of string
   return x[0].toUpperCase() + x.slice(1).toLowerCase();
 });


  return newArray.join(" ");  // joining the array into a string
}

console.log(titleCase("I'm a little tea pot"));
