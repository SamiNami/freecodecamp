
function convertToRoman(num) {
// create variables needed
  var arr = String(num).split("").map(Number);
  var length = arr.length;
  var roman = [];
  var final = "";
// make the number a 4 digit number
  switch (length) {
    case 1:
        arr.splice(0, 0, 0, 0, 0);
        break;
    case 2:
        arr.splice(0, 0, 0, 0);
        break;
    case 3:
        arr.splice(0, 0, 0);
        break;
}

// element = looking of that number in the array
for(element = 1; element <= 9; element++){
  // idx becomes the value of the first time it exists in the array OR it becomes -1
  var idx = arr.indexOf(element);
  // while idx exists int the array do the following: (it exists if the value is not -1)
  while (idx != -1){
    // push the current number and position into the array
    var number = {number:element, position:arr.indexOf(element, idx)};
    roman.push(number);
    // idx becomes the 2nd value it exists in the array, if it does not exist it becomes -1
    idx = arr.indexOf(element, idx + 1);
    }
}
// now the roman array has 4 objects in it with one number and position

// sort the array by position( pos 0 = thousands, pos 1 = hundreds...)
roman.sort(function (a,b){
  return a.position - b.position;
});

console.log(roman);
// convert the values into roman numbers
// for thousands
roman.forEach(function(val){
  if(val.position === 0){
    switch (val.number) {
      case 1:
        final += "M";
        break;
      case 2:
        final += "MM";
        break;
      case 3:
        final += "MMM";
        break;
      case 4:
        final += "MMMM";
        break;
      case 5:
        final += "MMMMM";
        break;
      case 6:
        final += "MMMMMM";
        break;
      case 7:
        final += "MMMMMMM";
        break;
      case 8:
        final += "MMMMMMMM";
        break;
      case 9:
        final += "MMMMMMMMM";
        break;
    }
  }
  // for hundreds
  else if(val.position === 1){
    switch (val.number) {
      case 1:
        final += "C";
        break;
      case 2:
        final += "CC";
        break;
      case 3:
        final += "CCC";
        break;
      case 4:
        final += "CD";
        break;
      case 5:
        final += "D";
        break;
      case 6:
        final += "DC";
        break;
      case 7:
        final += "DCC";
        break;
      case 8:
        final += "DCCC";
        break;
      case 9:
        final += "CM";
        break;
    }
  }
  // for tens
  else if(val.position === 2){
    switch (val.number) {
      case 1:
        final += "X";
        break;
      case 2:
        final += "XX";
        break;
      case 3:
        final += "XXX";
        break;
      case 4:
        final += "XL";
        break;
      case 5:
        final += "L";
        break;
      case 6:
        final += "LX";
        break;
      case 7:
        final += "LXX";
        break;
      case 8:
        final += "LXXX";
        break;
      case 9:
        final += "XC";
        break;
    }
  }
  // for single digit
  else if(val.position === 3){
    switch (val.number) {
      case 1:
        final += "I";
        break;
      case 2:
        final += "II";
        break;
      case 3:
        final += "III";
        break;
      case 4:
        final += "IV";
        break;
      case 5:
        final += "V";
        break;
      case 6:
        final += "VI";
        break;
      case 7:
        final += "VII";
        break;
      case 8:
        final += "VIII";
        break;
      case 9:
        final += "IX";
        break;
    }
  }

});

return final;
}


convertToRoman(58);


/* Looked up a better solution online inorder to code more effiecently
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

// test here
convertToRoman(36);
*/
