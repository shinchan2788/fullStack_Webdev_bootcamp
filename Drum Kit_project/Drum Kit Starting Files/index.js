for (i=0;i<=6;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var drumbutton=this.innerHTML;
    drumsounds(drumbutton)
    buttonanimation(drumbutton);
});
}

document.addEventListener("keydown",function(event){
    // var kei=logkey;
    var kie=(event.key);
    drumsounds(kie);
    buttonanimation(kie);

});

function drumsounds(drum){
    
    
    switch (drum) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
             
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();   
            break;
        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        
        default:
            console.log(this);
            break;
    }
}

function buttonanimation(ki){
    var acti=document.querySelector("."+ki);
    acti.classList.add("pressed");
    setTimeout(function(){acti.classList.remove("pressed")},100);
}
