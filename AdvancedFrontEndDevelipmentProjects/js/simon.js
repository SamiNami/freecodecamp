
$(document).ready(function(){

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
  // reset the sequence
  clear();
  addStepSqeuence();
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
     turnOn(i, arr);
     playSound(i, arr);
     turnOff(i, arr);
      i++;
      if (i < arr.length) {
         myLoop(i, arr);
      }
   }, 700);
}

// turns the light on
function turnOn(i, arr){
  $('#'+ arr[i]).css("opacity","1.0");
}

// turns the light off after 500ms
function turnOff(i, arr){
  setTimeout(function () {
  $('#'+ arr[i]).css("opacity","0.5");
  }, 500);
}

// plays the sound...
function playSound(i, arr){
  document.getElementById('sound' + arr[i]).play();
}


function clear(){
   sequence = [];
   playerSequence = [];
   pStep = 0;
}


$("#1,#2,#3,#4").click(function(){
  if(canClick){


    var buttonNumber = parseInt(this.id);
/*
    turnOn(buttonNumber, sequence);
    playSound(buttonNumber, sequence);
    turnOff(buttonNumber, sequence);
*/
    playerSequence.push(buttonNumber);
    // compare that the current step is the same as in the sequence
    checkStep();

    if(arraysEqual(playerSequence, sequence)){
        playerSequence = [];
        pStep = 0;
        addStepSqeuence();
        showSequence();
      }



  }
});

function checkStep(){

  var check = sequence.slice(pStep, pStep + 1);

  if(check.indexOf(playerSequence[pStep]) !== 0){
        playerSequence = [];
        pStep = 0;
        showSequence();
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





});
