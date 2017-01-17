
function chunkArrayInGroups(arr, size) {
    var array = [];
    for (i = 0; i < arr.length; i+=size){
      array.push(arr.slice(i,i+size));
    }

  return array;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
