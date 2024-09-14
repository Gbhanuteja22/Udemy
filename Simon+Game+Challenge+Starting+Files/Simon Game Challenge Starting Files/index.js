var gamePattern=[];
var level=0;
var buttonColors=["red","blue","green","yellow"];
var userClickedPattern=[];
var started=false;
function nextseq(){
    level++;
    userClickedPattern=[];
    $("#level-title").text("Level "+level);
    var randnumber= Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randnumber];
    gamePattern.push(randomChosenColor);
    playsound(randomChosenColor);
}
$(".btn").click(function (){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAns(userClickedPattern.length-1);
})
function playsound(colors){
    $("#"+colors).fadeOut(100).fadeIn(100);
    var aud=new Audio("/Simon+Game+Challenge+Starting+Files/Simon Game Challenge Starting Files/sounds/"+colors+".mp3");
    aud.play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100)
}
$(document).keypress(function(){
    if(!started){
        started=true;
        $("#level-title").text("Level "+level);
        nextseq();
    }
})
function checkAns(currentlevel){
    if(userClickedPattern[currentlevel]===gamePattern[currentlevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function () {
                nextseq();
              },1000);
        }
    }
    else{
        console.log("wrong");
        var aud=new Audio("/Simon+Game+Challenge+Starting+Files/Simon Game Challenge Starting Files/sounds/wrong.mp3");
        aud.play();
        started=false;
        level=0;
        $("h1").text("Game Over..! Press A key to start");
        $("body").css("background-color","red");
        setTimeout(function (){
            $("body").css("background-color","#011F3F");
        },200)

        gamePattern=[];
    }
}