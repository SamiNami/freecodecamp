// check if the secong argument is truthy on all element of a collection.
function truthCheck(collection, pre) {

  var check = true;

  collection.forEach(function(person){
    if(!person[pre]){
      check = false;
    }
  });
  console.log(check);
  return check;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
