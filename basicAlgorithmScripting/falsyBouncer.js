// filter out falsy values

function bouncer(arr) {

// checks if the value is true
function isTrue(val){
  return Boolean(val);
}

  return arr.filter(isTrue);
}

console.log(bouncer([7, "ate", "", false, 9]));
