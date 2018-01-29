var i = 0;
var j = 0;
var k = 0;
var images = [
            "img/pelikuvat/Battleblocks_Theater/bb5.jpg",
            "img/pelikuvat/Limbo/Limbo.jpg",
            "img/pelikuvat/Overcooked/Overcooked-Banner.jpg",
            "img/pelikuvat/Supermeatboy/SuperMeatBoy.jpg"
             
            ] ;
var people = [
            "img/people/Gaben.png",
            "img/people/Ion.png",
            "img/people/Levoranta.png"
            ] ;
var venue = [
            "img/event/lavamustavalko.jpg",
            "img/event/lavasivusta.jpg",
            "img/event/lavatakaa.jpg",
            "img/event/lavatakaaeiWille.jpg",
            "img/event/lavaylhaalta.jpg",
            "img/event/tyhjalava.jpg"
            ] ;

              //kaikkien kuvien pitÃ¤Ã¤ olla samaa kuvasuhdetta. suosittelen 1:1 kuvasuhdetta eli neliota

//var dummy = document.getElementById("dummy");
//if (dummy.style.display === "none") {

    function nextSlide(){
        document.getElementById("circle1").style.backgroundImage = "url("+images[i]+")";
        i++;
        if (i >= images.length) i = 0;
    }
    setInterval(function(){ nextSlide(); }, 1000);
    
    function nextSlide2(){
        document.getElementById("circle2").style.backgroundImage = "url("+venue[j]+")";
        j++;
        if (j >= venue.length) j = 0;
    }
    setInterval(function(){ nextSlide2(); }, 1000);
    
    function nextSlide3(){
        document.getElementById("circle3").style.backgroundImage = "url("+people[k]+")";
        k++;
        if (k >= people.length) k = 0;
    }
    setInterval(function(){ nextSlide3(); }, 1000); 


//  SHOW/HIDE GAME DESCRIPTION STUFF
function showhideInfo() {
    var x = document.getElementById("ssInfo1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}