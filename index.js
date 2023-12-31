
function handleClick(_value)
{   
    var audio;
    switch (_value) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            break;        
        case "j":
            audio = new Audio('sounds/snare.mp3');
            break;
        case "k":
            audio = new Audio('sounds/crash.mp3');
            break; 
        case "l": 
        audio = new Audio('sounds/kick-bass.mp3');
        break;           
        default:
            break;
    }
   audio.play() ;
}

function buttonAnimation(_button)
{
    document.querySelector("."+ _button).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ _button).classList.remove("pressed");   
    },100) ;
}

var numOfDrumButtons = document.querySelectorAll(".drum").length ;
for(var i=0 ; i < numOfDrumButtons ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        handleClick(this.innerHTML) ;
        buttonAnimation(this.innerHTML);
    }
    );
}

// document.addEventListener("keypress",handleClick) ;

document.addEventListener("keypress",function (event)
{
    handleClick(event.key) ;
    buttonAnimation(event.key);
}) ;
