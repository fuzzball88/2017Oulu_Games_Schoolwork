/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function Function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
    showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
    var i;
    var x = document.getElementsByClassName("bigSlide1");
    var smallSlide = document.getElementsByClassName("smallSlide1");
    if (n > x.length) {
        slideIndex1 = 1;
    }
    if (n < 1) {
        slideIndex1 = x.length;
    } 
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    
    for (i = 0; i < smallSlide.length; i++) {
        smallSlide[i].className = smallSlide[i].className.replace(" active", "");
    }
    x[slideIndex1 -1].style.opacity = "1";
    smallSlide[slideIndex1 -1].className += " active";
}

function currentSlide1(n) {
  showDivs1(slideIndex1 = n);
  }  


var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("bigSlide2");
    var smallSlide = document.getElementsByClassName("smallSlide2");
    if (n > x.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = x.length;
    } 
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    
    for (i = 0; i < smallSlide.length; i++) {
        smallSlide[i].className = smallSlide[i].className.replace(" active", "");
    }
    x[slideIndex2 -1].style.opacity = "1";
    smallSlide[slideIndex2 -1].className += " active";
}

function currentSlide2(n) {
  showDivs2(slideIndex2 = n);
  }
  
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
    showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("bigSlide3");
    var smallSlide = document.getElementsByClassName("smallSlide3");
    if (n > x.length) {
        slideIndex3 = 1;
    }
    if (n < 1) {
        slideIndex3 = x.length;
    } 
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    
    for (i = 0; i < smallSlide.length; i++) {
        smallSlide[i].className = smallSlide[i].className.replace(" active", "");
    }
    x[slideIndex3 -1].style.opacity = "1";
    smallSlide[slideIndex3 -1].className += " active";
}

function currentSlide3(n) {
  showDivs3(slideIndex3 = n);
  }
  
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
    showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
    var i;
    var x = document.getElementsByClassName("bigSlide4");
    var smallSlide = document.getElementsByClassName("smallSlide4");
    if (n > x.length) {
        slideIndex4 = 1;
    }
    if (n < 1) {
        slideIndex4 = x.length;
    } 
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    
    for (i = 0; i < smallSlide.length; i++) {
        smallSlide[i].className = smallSlide[i].className.replace(" active", "");
    }
    x[slideIndex4 -1].style.opacity = "1";
    smallSlide[slideIndex4 -1].className += " active";
}

function currentSlide4(n) {
  showDivs4(slideIndex4 = n);
  }

function formFunction() {
    var nimi = document.getElementById("namei");
        nimi.setCustomValidity("");
        if (!nimi.validity.valid) {
            nimi.setCustomValidity("Anna nimesi");
        }
    var sahkoposti = document.getElementById("emaili");
        sahkoposti.setCustomValidity("");
        if (!sahkoposti.validity.valid) {
            sahkoposti.setCustomValidity("Anna sähköpostisi");
        }
    var peliNimi = document.getElementById("gamei");
        peliNimi.setCustomValidity("");
        if (!peliNimi.validity.valid) {
            peliNimi.setCustomValidity("Anna pelin nimi");
        }
    var peliSlogan = document.getElementById("peliSlogan");
        peliSlogan.setCustomValidity("");
        if (!peliSlogan.validity.valid) {
            peliSlogan.setCustomValidity("Anna pelillesi myyntilause");
        }
    var peliKuvaus = document.getElementById("peliKuvaus");
        peliKuvaus.setCustomValidity("");
        if (!peliKuvaus.validity.valid) {
            peliKuvaus.setCustomValidity("Kuvaile pelisi muutamalla lauseella");
        }
    var checkBox = document.getElementById("fieldTerms");
        checkBox.setCustomValidity("");
        if (!checkBox.validity.valid) {
            checkBox.setCustomValidity("Muista kuvat!");
        }
}
function initMap() {
        var uluru = {lat: 65.013825, lng: 25.466231};
        var map = new google.maps.Map(document.getElementById("gmaps"), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
          });
      }