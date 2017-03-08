
$(document).ready(function(){

var canClick = false;
var sequence = [];

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

$(".start").click(function(){
  if(canClick){
  // add clear();

  // get a random number between 1-4
  var number = Math.floor((Math.random() * 4) + 1);
  sequence.push(number);
  console.log(sequence);

  showSequence();

  }

});

function showSequence(){
  // prevents clicking during sequence
  canClick = false;

  sequence.forEach(function(target){

    $('#'+ target).css("opacity","1.0");
    document.getElementById('sound' + target).play();

    setTimeout(function(){
      $('#'+ target).css("opacity","0.5");
    }, 500);



  });

}







});
