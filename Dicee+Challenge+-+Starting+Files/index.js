var randomnum=Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src","/Dicee+Challenge+-+Starting+Files/images/dice"+randomnum+".png");
var randomnum1=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","/Dicee+Challenge+-+Starting+Files/images/dice"+randomnum1+".png");
if(randomnum>randomnum1){
    document.querySelector("h1").innerText="Player 1 Wins!!";
}else if(randomnum<randomnum1){
    document.querySelector("h1").innerText="Player 2 Wins!!";
}else{
    document.querySelector("h1").innerText="DRAW!!";
}