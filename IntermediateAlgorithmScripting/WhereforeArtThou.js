// Function that looks up each object with the matching spesified property value


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // ge the keys from the object
  var keys = Object.keys(source);


  console.log(keys);


    collection.forEach(function(part){
      console.log(part);
      if(part.hasOwnProperty(keys))
        console.log("kappa");

      keys.forEach(function(key){
        console.log(key);

      });



    });


console.log(arr);




  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });


/*
collection.forEach(function(val){
  // if the collection object has the keys:
  if(val.hasOwnProperty(keys)){
    console.log("it has the keys");

    keys.forEach(function(key){
      console.log(val[key]);
    });

  }


});
*/
