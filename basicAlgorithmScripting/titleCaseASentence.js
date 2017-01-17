
function titleCase(str) {
  var array =str.split(" ");

  var newArray = array.map(function(x){
   return x[0].toUpperCase() + x.slice(1).toLowerCase(); // slice cuts away the first letter of string
  });


  return newArray.join(" ");  // joining the array into a string
}

console.log(titleCase("I'm a little tea pot"));
