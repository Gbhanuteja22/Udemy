for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makesound(this.innerText);
        buttonanimation(this.innerText);
    });
}
function makesound(i){
    switch(i){
        case 'w':var crash=new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/crash.mp3");
                crash.play();
                break;
        case 'a':var kick=new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
                kick.play();
                break;
        case 's':var snare=new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/snare.mp3");
                snare.play();
                break;
        case 'd':var tom1=new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-1.mp3");
                tom1.play();
                break;
        case 'j':var tom2=new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-2.mp3");
                tom2.play();
                break;
        case 'k':var tom3=new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-3.mp3");
                tom3.play();
                break;
        case 'l':var tom4=new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-4.mp3");
                tom4.play();
                break;
    }
}
document.addEventListener("keypress",function (e){
    makesound(e.key);
    buttonanimation(e.key);
});
function buttonanimation(chose){
    var active=document.querySelector("."+chose);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}