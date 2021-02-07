// alert("Hola!");
// $("h1").css("color","black");

$(document).keypress(function(event){
    // var keys= console.log(event);
    var keys=[event.key];
    $("h1").text(keys);
});