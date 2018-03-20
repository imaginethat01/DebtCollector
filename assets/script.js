
$( document ).ready(function(){ 
    var sample = document.getElementById("foobar");
    sample.play();
    
var Random=Math.floor(Math.random()*102+19)

$('#jimmyTake').text(Random); 

var num1= Math.floor(Math.random()*12+1)
var num2= Math.floor(Math.random()*12+1)
var num3= Math.floor(Math.random()*12+1)
var num4= Math.floor(Math.random()*12+1)


var playerTotal = 0;
var wins = 0;
var losses = 0;

$('#wins').text(wins); 
$('#losses').text(losses);

function reset() {
    Random=Math.floor(Math.random()*102+19);
    console.log(Random)
    $('jimmyTake').text(Random); 
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    playerTotal = 0;
    $('#totalCash').text(playerTotal);
}

function winner(){ 
alert("You lived to see another day! - Good for you!");
wins++;
$('#wins').text(wins);
reset();
}

function loser(){
alert ("You're gonna be sleeping with the fishes, my friend.");
losses++;
$('#losses').text(losses);
reset()   
}


$('.ace').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('#totalCash').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        }   
  })  




$('.king').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('#totalCash').text(playerTotal); 
        if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })
  
  
  $('.queen').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalCash').text(playerTotal);

          if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        } 
  })
  
  $('.jack').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalCash').text(playerTotal); 
      
          if (playerTotal == Random){
          winner();
        }
        else if ( playerTotal > Random){
          loser();
        }
  });   
}); 
