
$(document).ready(function(){
  // future note: use an overlay instead of the canClick variable
var canClick = false;
var sequence = [];
var playerSequence = [];
// the step the player is on
var pStep = 0;


// set's the value of canClick, uses the toggle button
$(function setClick() {
  $("#toggle-event").change(function() {
    canClick = $(this).prop("checked");
    // controls the css highlight the count area
    if(canClick){
      $('.panel-text').css("opacity","1.0");
    }
    else{
      $('.panel-text').css("opacity","0.3");
      // add clear();
    }
  });
});

// what the stat button does
$(".start").click(function(){
  // only works if the toggle is switched on
  if(canClick){
  canClick = false;

  // reset the sequence
  clear();
  addStepSqeuence();
  displaySequenceLenght();
  showSequence();
  }
});

function addStepSqeuence(){
  // get a random number between 1-4
  var number = Math.floor((Math.random() * 4) + 1);
  sequence.push(number);
}

function showSequence(){
var i = 0;
  myLoop(i, sequence);
}

// loop used to show
function myLoop (i, arr) {
   setTimeout(function () {
     turnOn(arr[i]);
     playSound(arr[i]);
     turnOff(arr[i]);
      i++;
      if (i < arr.length) {
         myLoop(i, arr);
      }
   }, 700);
}

// turns the light on
function turnOn(int){
  $('#'+ int).css("opacity","1.0");
}

// turns the light off after 500ms
function turnOff(int){
  canClick = false;
  setTimeout(function () {
    $('#'+ int).css("opacity","0.5");
    canClick = true;
  }, 500);
}

// plays the sound...
function playSound(int){
  document.getElementById('sound' + int).play();
}

function clear(){
   sequence = [];
   playerSequence = [];
   pStep = 0;
}

function displaySequenceLenght(){
  var length = sequence.length;
  $(".panel-text").text(length);
}


$("#1,#2,#3,#4").click(function(){
  if(canClick){



    var buttonNumber = parseInt(this.id);
    // shows/sounds the click
    turnOn(buttonNumber);
    playSound(buttonNumber);
    turnOff(buttonNumber);

    playerSequence.push(buttonNumber);
    // compare the current step to the same step in the sequence
    checkStep();

    if(arraysEqual(playerSequence, sequence)){
        if(checkWin()){
          $(".panel-text").text("WIN");
          setTimeout(function () {
            $(".start").click();
          }, 2900);

        }
        else{
        canClick = false;
        playerSequence = [];
        pStep = 0;
        setTimeout(function () {
          addStepSqeuence();
          displaySequenceLenght();
          showSequence();
        }, 500);
        }
      }
  }
});

function checkStep(){

  var check = sequence.slice(pStep, pStep + 1);

  if(check.indexOf(playerSequence[pStep]) !== 0){
        canClick = false;
        showFail();

        if(strickt === false){
          setTimeout(function () {
            playerSequence = [];
            pStep = 0;
            showSequence();
          }, 3000);
        }
        else{

          setTimeout(function () {
          $(".start").click();
        }, 2900);

        }
    }
  else{
    pStep++;
  }

}

function arraysEqual(arr1, arr2){
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;){
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function showFail(){

  setTimeout(function () {
    $(".panel-text").text("! !");
  }, 500);

  setTimeout(function () {
    displaySequenceLenght();
  }, 2900);



}

// Code for the strickt mode
// Strickt mode tracker
var strickt = false;


$(".strickt").click(function(){
  // only works if the toggle is switched on
  if(canClick){
    if(strickt === false){
    strickt = true;
    $('.strickt').css("opacity","0.9");
    }
    else{
      strickt = false;
      $('.strickt').css("opacity","0.5");
    }

  }
});

function checkWin(){
  if(sequence.length === 20){
    return true;
  }
}


});
