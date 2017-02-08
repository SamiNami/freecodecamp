// Function that looks up each object with the matching spesified property value

function whatIsInAName(collection, source) {

  var arr = [];
  // Only change code below this line
  // get the keys from the object
  var keys = Object.keys(source);
    // loop throught each part in the collection
    collection.forEach(function(part){
      // variable to check if the part shall be retrurned
      var pass = true;
      // loop through each key
      keys.forEach(function(key){
        // if the part has the current key continue / else fail the part
        if(part.hasOwnProperty(key)){
          // if the part and the soruce do not have the same value, fail the part
          if (part[key] !== source[key]){
            pass = false;
          }
        }
        else{
          pass = false;
        }
      });
      // after you have checked all keys, it the pass is still true, add it to the array
      if(pass === true){
        arr.push(part);
      }
    });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });


/* Looked up a more basci solution after I was done
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
*/
