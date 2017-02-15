// make fewer buttons!

$( document ).ready(function() {

  var number = 0;
  var series =[];
  var result ="";
  var clear = false;
  // variables for displaying
  var dnumber = "";

  // buttons for the numbers

  $("#1").click(function() {
    checkClear();
    number = 1;
    console.log(number);
    series.push(number);
    console.log(series);

    result = series.join("");
    $('.top-panel').text(result);

  });
  $("#2").click(function() {
    checkClear();
    number = 2;
    series.push(number);
    console.log(number);
    console.log(series);
  });
  $("#3").click(function() {
    checkClear();
    number = 3;
    series.push(number);
    console.log(number);
    console.log(series);
  });
  $("#4").click(function() {
    checkClear();
    number = 4;
    series.push(number);
    console.log(number);
    console.log(series);
  });
  $("#5").click(function() {
    checkClear();
    number = 5;
    series.push(number);
    console.log(number);
    console.log(series);
  });
  $("#6").click(function() {
    checkClear();
    number = 6;
    series.push(number);
    console.log(number);
    console.log(series);
  });
  $("#7").click(function() {
    checkClear();
    number = 7;
    series.push(number);
    console.log(number);
    console.log(series);
  });
  $("#8").click(function() {
    checkClear();
    number = 8;
    series.push(number);
    console.log(number);
    console.log(series);
  });
  $("#9").click(function() {
    checkClear();
    number = 9;
    series.push(number);
    console.log(number);
    console.log(series);
  });


  // math opperators
  $("#add").click(function() {
    if(!checkSame()){
      clear = false;
      number = "+";
      series.push(number);
    }

    console.log(number);
    console.log(series);
  });
  $("#sub").click(function() {
    if(!checkSame()){
    clear = false;
    number = "-";
    series.push(number);
    console.log(number);
    console.log(series);
    }
  });
  $("#mul").click(function() {
    if(!checkSame()){
    clear = false;
    number = "*";
    series.push(number);
    console.log(number);
    console.log(series);
    }
  });
  $("#div").click(function() {
    if(!checkSame()){
    clear = false;
    number = "/";
    series.push(number);
    console.log(number);
    console.log(series);
    }
  });


  // other opperators

  $("#dot").click(function() {
    number = ".";
    series.push(number);
    console.log(series);
  });

  $("#ac").click(function() {
    number = 0;
    series = [];
    result ="";
    console.log(number);
    console.log(series);
    console.log(result);
  });

  $("#ce").click(function() {
    number = 0;
    result ="";
    series.pop();

    console.log(number);
    console.log(series);
    console.log(result);
  });

  $("#equ").click(function() {
    if(!checkSame()){
    result = series.join("");
    console.log(result);
    result = eval(result);
    console.log(result);
    number = result;
    series = [number];
    console.log(series);
    clear = true;
    }
  });

// checks if the calculator is supposed to clear the array
  function checkClear(){
    if(clear === true){
      series.pop();
      clear = false;
    }
  }

  function checkSame(){
    if(series[series.length-1] === "+" || series[series.length-1] === "-" || series[series.length-1] === "*" || series[series.length-1] === "/")  {
        return true;
    }
  }

});
