// create a function that sums two arguments togheter. if there is only
// one arugment, return a function that expects another one and returns their sum

function addTogether() {
// creat a array to store the arguments in
var args = [];
// add the arguments into the array
for(var i = 0; i <arguments.length; ++i){
  args[i] = arguments[i];
}

// if there are 2 arguments
if(args.length === 2){
  // if the both arguements are not numbers, return undefined
  if (typeof args[0] !== 'number' || typeof args[1] !=="number"){
    return undefined;
  }
  // else return the sum
  else{
    return args[0] + args[1];
  }
}
// if there is only one argument
if(args.length === 1){
  // save the argument
  first = args[0];
  // if it's not a number, return undefined
  if(typeof first !== "number"){
    return undefined;
  }
  //else return a function
  else{
    return function(second){
      // the fucntion checks if the provided argument is a number
      if(typeof second !== "number"){
        return undefined;
      }
      // it it is a number it returns the sum
      else{
        return first + second;
      }
    };
  }

}

}


console.log(addTogether(2)(3));
