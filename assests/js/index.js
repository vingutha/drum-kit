//detect the button press
var numberofDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofDrums; i++){
  
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       // this.style.color = "white";
        //this. = gives the identity of the button which triggered the event listener & to check console.log(this);
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
    //in the doc, u query all the selectors having class drum and add functionality to each one
    //passing the function as an input so that this function, handleClick is called later when the button is clicked
}

//detecting keyboard press
document.addEventListener("keydown", function(event){
    //passing the event that caused the key press, that event has property key
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key){
        case "w":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick =new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare =new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 =new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 =new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 =new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 =new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default: console.log("Invalid");
    }
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}

// var audio = new Audio('sounds/tom-1.mp3');
//  audio.play();



/* HIGH-ORDER FUNCTION
function add (num1, num2){
    return num1+num2;
}
function subtract (num1, num2){
    return num1-num2;
}
function multiply (num1, num2){
    return num1*num2;
}
function divide (num1, num2){
    return num1/num2;
}

function calc (num1, num2, operator){
    return operator(num1, num2);
}

*/