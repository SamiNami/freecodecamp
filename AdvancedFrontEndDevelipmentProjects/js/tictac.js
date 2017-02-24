
$( document ).ready(function(){

var player ="";
var cpu ="";

// object for the squares

var game = { topleft:"1", topmid:"2",  topright:"3",
            midleft:"4", mid:"5",     midright:"6",
            botleft:"7", botmid:"8",  botright:"9"};

// Selecting X or O
$(".X").click(function(){
  player = "X";
  cpu = "O";
  $( ".modal").hide();
});

$(".O").click(function(){
  player = "O";
  cpu = "X";
  $( ".modal").hide();
});

//

$(".responsive-square").click(function(){
    // create if to make sure it's empty
    $(this).children('.content').children(".table").children(".table-cell").text(player);
    var position = $(this).children('.content').children(".table").children(".table-cell").attr('class').split(' ')[1];
    game[position] = player;
    console.log(game);
    checkWin();

    // write what the computer is supposed to do



});







function checkWin(){
  leftToRight();
  topToBottom();
  diagonal();
}

function leftToRight(){
  if(game.topleft === game.topmid && game.topmid === game.topright){
    if(player === game.topleft){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
  else if(game.midleft === game.mid && game.mid === game.midright){
    if(player === game.mid){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
  else if(game.botleft === game.botmid && game.botmid === game.botright){
    if(player === game.botmid){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
}

function topToBottom(){
  if(game.topleft === game.midleft && game.midleft === game.botleft){
    if(player === game.midleft){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
  else if(game.topmid === game.mid && game.mid === game.botmid){
    if(player === game.mid){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
  else if(game.topright === game.midright && game.midright === game.botright){
    if(player === game.midright){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
}

function diagonal(){
  if(game.topleft === game.mid && game.mid === game.botright){
    if(player === game.mid){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
  else if(game.topright === game.mid && game.mid === game.botleft){
    if(player === game.mid){
      alert("You win!");
    }
    else{
      alert("Computer wins!");
    }
    clear();
  }
}

function clear(){
  var i = 1;
  for(var key in game){
    game[key] = i;
    $("."+key).text("");
    i++;
  }
}




});
