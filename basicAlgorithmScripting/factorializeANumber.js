function factorialize(num) {

var result = 1;

  for (i = num; i > 0; i--){
    result *= i;
  }
  return result;
}
(factorialize(5));
