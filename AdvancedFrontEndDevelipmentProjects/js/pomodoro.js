
$(document).ready(function(){

  var countdown = parseInt( $(".cd").html() );
  var seconds = 0;
  var interval = function(){};
  // amount of total seconds
  var total = 0;
  // varible for the current amount of seconds
  var current = 0;
  // keeps track if the progress-bar should be cleared
  var clearTotal = true;
  // keeps track if you can add or substract time
  var preventClick = false;

  // display the countdown
  $(".countdown").text(countdown);

  // Click Events

    // adds time to the coutndown
  $(".cd+").click(function(){
    // does not fire unless the clock has been reset
    if(preventClick === false){
    countdown = countdown + 1;
    $(".countdown").text(countdown);
    $(".cd").text(countdown);
    seconds = 0;
    }
  });

  $(".cd-").click(function(){
    if(preventClick === false){
    countdown = countdown - 1;
    // prevents 0 minutes
    if(countdown === 0){
      countdown = 1;
    }
    $(".countdown").text(countdown);
    $(".cd").text(countdown);
    seconds = 0;
    }
  });

  // stops and resets the clock
  $(".reset").click(function(){
    countdown = 25;
    seconds = 0;
    stopCountdown();
    clearTotal = true;
    preventClick = false;
    total = countdown * 60;
    current =0;

    $(".start").text("Start");
    $(".countdown").text(countdown);
    $(".cd").text(countdown);
  });

  // clicking the area starts / stops the countdown
  $(".countdownarea").click(function(){
    if($(".start").text() === "Start" ){
      $(".start").text("Pause");
      startCountdown();
      preventClick = true;
    }
    else{
      $(".start").text("Start");
      stopCountdown();
    }
  });

  // Functions

  function startCountdown() {
    interval = setInterval(whatToDo, 1000);
    // clears the total value of the progress-bar, if reset has been clicked
    if(clearTotal === true){
      total = countdown * 60;
    }
  }

  // what the countdown does every 1 seconds
  function whatToDo() {
    setProgressBar();
    seconds = seconds -1;
    if(countdown === 0 && seconds === 0){
        stopCountdown();
        window.alert("Time to take a break!");
    }
    else if(seconds === -1){
      countdown = countdown -1;
      seconds = 59;
    }
    $(".countdown").text(countdown + " : " + seconds);
  }
  // stops the countdown
  function stopCountdown() {
    clearInterval(interval);
    clearTotal = false;
  }

  // calulates and displays the value for the progress-bar
  function setProgressBar() {
      current += 1;
      var progress = (current/ total) * 100;
      progress = roundToTwo(progress);
      $('.progress-bar').attr('style','width:' +progress+ '%');
  }

  // rounds to two decimals
  function roundToTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
  }

});
