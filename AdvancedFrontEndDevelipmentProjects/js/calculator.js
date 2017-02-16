// make fewer buttons!

$( document ).ready(function() {

  var number = 0;
  var series =[];
  var result ="";
  var clear = false;
  var ans = false;
  // tracks if you can use the . button / for after you pressed =
  var nodot =false;
  // variables for displaying
  var dnumber = "";
  var darr = [];
  // buttons for the numbers

  $("#1").click(function() {
    checkClear();
    number = 1;
    doMath();
  });

    $("#2").click(function() {
    checkClear();
    number = 2;
    doMath();
  });

  $("#3").click(function() {
    checkClear();
    number = 3;
    doMath();
  });

  $("#4").click(function() {
    checkClear();
    number = 4;
    doMath();
  });

  $("#5").click(function() {
    checkClear();
    number = 5;
    doMath();
  });

  $("#6").click(function() {
    checkClear();
    number = 6;
    doMath();
  });

  $("#7").click(function() {
    checkClear();
    number = 7;
    doMath();
  });

  $("#8").click(function() {
    checkClear();
    number = 8;
    doMath();
  });

  $("#9").click(function() {
    checkClear();
    number = 9;
    doMath();
  });

  $("#0").click(function() {
    checkClear();
    number = 0;
    doMath();
  });
  // very similiar to numbers
  $("#dot").click(function() {
    // prevents chaining of dots
    if(!checkSame()){
      // checks if . is already in the series array
      // it it's not, you can add a .
      if(series.indexOf(".") === -1 ){
        // prevents dots from being typed after a =
        if( nodot === false){
          number = ".";
          doMath();
        }
      }
    }
  });

  // math opperators
  $("#add").click(function() {
    if(!checkSame()){
      number = "+";
      doOpp();
    }

  });

  $("#sub").click(function() {
    if(!checkSame()){
      number = "-";
      doOpp();
    }
  });

  $("#mul").click(function() {
    if(!checkSame() && !preventStart()){
      number = "*";
      doOpp();
    }
  });

  $("#div").click(function() {
    if(!checkSame() && !preventStart()){
      number = "/";
      doOpp();
    }
  });

  // other opperators

  $("#ac").click(function() {
    clean();
    $('.top-panel').text(0);
    $('.bottom-panel').text(0);
  });
  // not sure
  $("#ce").click(function() {


    number = 0;
    result = "";
    series.pop();

    darr.pop();


    if(darr[0]  === undefined ){
      $('.top-panel').text("0");
      darr[0] = 0;
    }
    if(series[0] === undefined){
      $('.bottom-panel').text(0);
    }
    else{
    dnumber = darr.join("");

    $('.top-panel').text(result + eval(dnumber));
    result = series.join("");
    $('.bottom-panel').text(result);
    }
  });

  $("#equ").click(function() {
    if(!checkSame()){



        result = series.join("");

        result = eval(result);
        result = roundToTwo(result);

        number = result;
        series =[];
        series[0] = number;
        darr = [];
        darr[0] = number;

        clear = true;
        nodot = true;
        $('.bottom-panel').text(result + "=" + eval(result));

        // turn it back into a string so I can mesure the length
        result = String(result);



        if(result.length > 14){
          clean();
          $('.top-panel').text(0);
          $('.bottom-panel').text("Digit Limit Met");
        }
        else{
        $('.top-panel').text(result);
        }

    }
  });

// function for the main operations
// visual fix/hack for when you use CE to remove all values in darr[]
function doMath(){
  if(darr[0] === 0){
    darr = [];
  }
  series.push(number);

  darr.push(number);
  dnumber = darr.join("");
  result = series.join("");

  //making sure the numbers do not get too large
  if(dnumber.length > 14){
    clean();
    $('.top-panel').text(0);
    $('.bottom-panel').text("Digit Limit Met");
  }
  else{
  $('.top-panel').text(dnumber);
  $('.bottom-panel').text(result);
  }

}
  // does the job of operators
  function doOpp(){
    clear = false;
    series.push(number);
    darr = [];
    darr.push(number);
    dnumber = darr.join("");
    $('.top-panel').text(dnumber);
    darr = [];
  }
// checks if the calculator is supposed to clear the array
  function checkClear(){
    if(clear === true){
      series.pop();
      darr = [];
      dnumber = "";
      clear = false;
      nodot = false;
    }
  }
// prevents 2 operators from being chained
  function checkSame(){
    if(series[series.length-1] === "+" || series[series.length-1] === "-" || series[series.length-1] === "*" || series[series.length-1] === "/" || series[series.length-1] === "." )  {
        return true;
    }
  }
  // prevents the starting of the chain with this button
  function preventStart(){
  if(series[0] === undefined){
    return true;
    }
  }
  // resets everything on the backend
  function clean(){
    number = 0;
    series = [];
    result ="";
    darr = [];
    dnumber = 0;
  }
  // rounding function
  function roundToTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
  }



});
