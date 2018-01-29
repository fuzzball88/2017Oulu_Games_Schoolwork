var position = -1;
function startGame(){
    getPosition();
   document.getElementById("Sgame"+position+""+position).style.display="block";
   document.getElementById("Sgame"+position).style.display="block";
}
function getPosition(){
    position = Math.ceil(Math.random()*3);
}
function gameIsFound(){
    document.getElementById("gameFound").style.display="block";

}
function closeGameBox(){
    document.getElementById("gameFound").style.display="none";
    document.getElementById("Sgame1").style.display="none";
    document.getElementById("Sgame2").style.display="none";
    document.getElementById("Sgame3").style.display="none";
    document.getElementById("Sgame11").style.display="none";
    document.getElementById("Sgame22").style.display="none";
    document.getElementById("Sgame33").style.display="none";
}