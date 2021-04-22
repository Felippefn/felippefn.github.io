function animationFunction(x) {
    x.classList.toggle("change");

}
function openNav() {
    document.getElementById("myNav").style.width = "15%";
    document.getElementById("myNav").style.height = "30%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "0%";
}
var open = false;
function clickDiv() {

    if (open) {
        closeNav();
        open = false;
    }
    else {
        openNav();
        open = true;
    }
}
var He = document.getElementById("movingP1");
var Llo = document.getElementById("movingP2");


//He.style.marginLeft = He1;
//Llo.style.marginRight = Llo1;
//window.addEventListener("scroll", moveP);
//function moveP() {
//  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//  var move = Llo1 * scrollpercent; 
//}

(function ($) {
    'use strict';
    $(window).on('load', function () {
        if ($(".box").length > 0) {
            $(".box").fadeOut("slow");
        }
    });
})(jQuery)
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("box").style.opacity = 0;
    //document.getElementById("preLoader").style.width = "0%";//
    document.getElementById("preLoader").style.height = "0%";
}