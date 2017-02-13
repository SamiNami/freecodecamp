// flatten the nested array, must account for varryin levels of nesting.

function steamrollArray(arr) {
  console.log(arr);
  // the new array..
  var newArray = [];
  // create the flatten function
  var flatten = function(value){
      // if the value is an array
      if(Array.isArray(value)){
        //loop through each value in the array, and filter them through the
        //flatten function
        value.forEach(function(val,ind){
        flatten(value[ind]);
        });
      }
      // it it's not an array, push it into the newArray
      else{

        newArray.push(value);
      }

  };
// run flatten for each value in the original array
arr.forEach(flatten);
console.log(newArray);
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
