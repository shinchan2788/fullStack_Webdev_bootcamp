

var buttonColors=["red", "blue", "green", "yellow"];
var randomChoosenColor; 
var gamePattern=[];
var userPattern=[];
var level =0;
var tiket=0;
($(document).keydown(function(){

    if (level==0){
        randsequence();
        
        usersequence();
    } 
    
    tiket++;
    console.log(tiket);
    console.log("Lvl= "+ level);
    return;
}));

if (level==1){
    usersequence();
}


function nextsequence(){
    randomNumber=Math.floor(Math.random()*4);
   
    return randomNumber;
}

function sounds(kei){
    // console.log(kei);
    switch (kei) {
        case "red":
            var red= new Audio("sounds/red.mp3");
            red.play();
            break;
        case "green":
            var green= new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow= new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case "blue":
            var blue= new Audio("sounds/blue.mp3");
            blue.play();
            break;        
        default:
            // console.log(this);
            break;
    }
}
function randsequence(){
    for (i=0;i<=3;i++){
            
        num=nextsequence();
        if (num===0){
        randomChoosenColor=buttonColors[0];
        }
        else if(num===1){
            randomChoosenColor=buttonColors[1];
        }
        else if(num===2){
            randomChoosenColor=buttonColors[2];
        }
        else if(num===3){
            randomChoosenColor=buttonColors[3];
        }
    }
    
    gamePattern.push(randomChoosenColor);
    animation(randomChoosenColor); 
    sounds(randomChoosenColor); // sounds
    level++;
    $("h1").html("Level "+ level);
   
}
function animation(x){
    $("."+x).addClass("pressed");
    setTimeout(function(){$("."+x).removeClass("pressed")},100);
}

function usersequence(){
    $(".btn").on("click", function(){
        var userChosenColor = $(this).attr("id");
        sounds(userChosenColor);// sounds
        userPattern.push(userChosenColor);
        animation(userChosenColor);
        checkAnswer();
    });   
}

function checkAnswer(){
    var gam = $(gamePattern).last().index();
    console.log(gam);
    var usr = $(userPattern).last().index();
    console.log(usr);

    if (gam==usr){
        randsequence();
    }

    else {
        $("h1").html("Wrong Gameover");
        console.log(this)
    }
}