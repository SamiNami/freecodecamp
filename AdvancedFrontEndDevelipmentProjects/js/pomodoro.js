
$(document).ready(function(){

var countdown = parseInt( $(".cd").html() );
var seconds = 0;
var interval;

// amount of total seconds
var total;
// varible for the current amount of seconds
var current = 0;

var clearTotal = true;
var preventClick = false;
// Click Events

// display the countdown
$(".countdown").text(countdown);



  $(".cd+").click(function(){
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


$(".reset").click(function(){
  countdown = 25;
  seconds = 0;
  stopCountdown();
  clearTotal = true;
  preventClick = false;

  total = countdown * 60;  
  current =0;
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
  // sets the total value, so it can be divided to check progress
  if(clearTotal === true){
    total = countdown * 60;
  }
}

function whatToDo() {

  setProgress();

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

function stopCountdown() {
  clearInterval(interval);
  clearTotal = false;
}

// sets the progress of the bar
function setProgress() {
    current += 1;
    var progress = (current/ total) * 100;
    progress = roundToTwo(progress);
    $('.progress-bar').attr('style','width:' +progress+ '%');
}
// rounds to Two numbers
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}



});
