// reove the elements from the inital array, that correspond with
// with the elments given later
function destroyer(arr) {
// filter function
function filt(val){
    return val !== args[i];
}
// creating some variables to store the arguments in
  var unfiltered = arr;
  var filtered = [];
// getting the arguments and putting them into an array
  var args = Array.prototype.slice.call(arguments, 1);
// standard iteration through the values in an array
  for (i = 0; i < args.length; i++){
    filtered = unfiltered.filter(filt);
    unfiltered = filtered;
  }

  return filtered;

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
