
$( document ).ready(function() {
  // variables for the math operations
  var number = 0;
  var series =[];
  var result ="";
  // keeps track if the calculator should be cleard
  var clear = false;
  // tracks if you can use the . button - for after you pressed =
  var nodot =false;
  // variables for displaying
  var dnumber = "";
  var darr = [];

  // code for the number buttons
  $("#0,#1,#2,#3,#4,#5,#6,#7,#8,#9").click(function() {
    checkClear();
    number = this.id;
    doMath();
  });

  // code for when you click the dot button
  $("#dot").click(function() {
    // prevents chaining of dots
    if(!checkSame()){
      // checks if . is already in the series array
      // it it's not, you can add a .
      if(darr.indexOf(".") === -1 ){
        // prevents dots from being typed after a =
        if( nodot === false){
          number = ".";
          doMath();
        }
      }
    }
  });

  // math opperators
  $("#add,#sub,#mul,#div").click(function() {
    console.log(this.id);
    if(!checkSame()){

      switch (this.id) {

        case "add":
          number = "+";
          break;
        case "sub":
          number = "-";
          break;
        case "mul":
          number = "*";
          break;
        case "div":
          number = "/";
      }
      doOpp();
    }
  });

  // other opperators
  // ac resets the calculator
  $("#ac").click(function() {
    clean();
    $('.top-panel').text(0);
    $('.bottom-panel').text(0);
  });
  // this button takes you one step back
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
        darr = number;

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
    nodot = false;
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
