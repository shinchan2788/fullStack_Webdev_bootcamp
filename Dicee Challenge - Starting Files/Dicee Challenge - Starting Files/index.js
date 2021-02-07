var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;

for (i=0;i<=5;i++){
    document.querySelectorAll(".p1")[i].style.visibility="hidden";
    document.querySelectorAll(".p2")[i].style.visibility="hidden";
}  

document.querySelectorAll(".p1")[randomNumber1-1].style.visibility="visible";

document.querySelectorAll(".p2")[randomNumber2-1].style.visibility="visible";

 if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="It's a Draw";
                 
}
 else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";    
}
 else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins";
}