var random1=Math.floor(Math.random() * 6) + 1;
var images1="images/dice" + random1 + ".png";
var selector1 = document.querySelectorAll("img")[0];
selector1.setAttribute("src" , images1);

var random2=Math.floor(Math.random() * 6) + 1;
var images2="images/" + "dice" + random2 + ".png";
var selector2 = document.querySelectorAll("img")[1];
selector2.setAttribute("src" , images2);
if(random1>random2){
    document.querySelector("h1").innerHTML=" 🎉 player 1 wins ";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="player 2 wins 🎉";
}
else{
    document.querySelector("h1").innerHTML="draw ! try once more ";
}