
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// For loop for adding listener to our all 7 buttons
/*for (var i = 0; i<=numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}*/

// while loop for adding listener to our all 7 buttons
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

var j = 0;
while (j <=numberOfDrumButtons){
    // call function with mouse click
    document.querySelectorAll("button")[j].addEventListener("click", function(){
        var buttonValue = this.innerHTML;
        makeSound(buttonValue);
        buttonAnimation(buttonValue);
    });
    // call function with key press
    //document.querySelectorAll("button")[j].addEventListener("keydown", handleClick);
    j++;
}


function makeSound(key){
    // switch statement for playing different sounds
    switch(key){
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
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        //default: console.log(buttonValue);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 200);

}