
$(document).ready(function(){

var countdown = parseInt( $(".cd").html() );
var seconds = 0;
var interval;

// Click Events

// display the countdown
$(".countdown").text(countdown);
console.log(countdown);

$(".cd+").click(function(){
  countdown = countdown + 1;
  $(".countdown").text(countdown);
  $(".cd").text(countdown);
  console.log(countdown);
  });

$(".cd-").click(function(){
  countdown = countdown - 1;
  // prevents 0 minutes
  if(countdown === 0){
    countdown = 1;
  }
  $(".countdown").text(countdown);
  $(".cd").text(countdown);
});

$(".reset").click(function(){
  countdown = 25;
  seconds = 0;
  stopCountdown();

  $(".countdown").text(countdown);
  $(".cd").text(countdown);
});

// clicking the area starts / stops the countdown
$(".countdownarea").click(function(){
  if($(".start").text() === "Start" ){
    $(".start").text("Pause");
    startCountdown();
  }
  else{
    $(".start").text("Start");
    stopCountdown();
  }
});

// Functions

function startCountdown() {
  interval = setInterval(whatToDo, 1000);
}


function whatToDo() {
  console.log(seconds);
  console.log(countdown);
  seconds = seconds -1;
  
  if(countdown === 0 && seconds === 0){
      window.alert("Time to take a break!");
      $(".countdown").text(countdown + " : " + seconds);
      stopCountdown();
  }
  else if(seconds === -1){
    countdown = countdown -1;
    seconds = 59;
  }
  $(".countdown").text(countdown + " : " + seconds);

}

function stopCountdown() {
  clearInterval(interval);
}


});
