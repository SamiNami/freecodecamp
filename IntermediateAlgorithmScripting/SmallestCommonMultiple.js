// find the smalest common multiple,that can be evenly divided by both
// and by all squential numbers in the range between these parameters



function smallestCommons(arr) {
  // sort the array and asign the values
  arr = arr.sort(function(a,b){
    return a-b;
  });

  var min = arr[0];
  var max = arr[1];
  var going = true;

  var currentMin = min;
  var currentMax = max;
  var i = 1;

  while(going === true){
    currentMax = max * i;
    console.log("max is " + currentMax);
    for(j = 1;currentMin < currentMax; j++){
      currentMin = min *j;
      console.log("min is " +currentMin);
    }
    if (currentMin === currentMax){
      console.log("Found it", currentMin,currentMax);
      break;
    }
    else{
      i++;
    }
  }
}


smallestCommons([4527,1001]);



/*


var going = true;
var i =1;


while (going === true){


  var current0 = (arr[0]) * i;
  var current1 = arr[1] * i;
  console.log(current0,current1);
  if(arr[0] * i === arr[1] * i){

    console.log("kappa");

    going = false;
    break;
  }
  i++;
  console.log(i);
  if(i === 100){
    break;
  }
}
*/
