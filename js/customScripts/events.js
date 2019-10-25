var buttonEntradas = document.getElementById("button-entradas");
var menuEntradas = document.getElementById("menu-entradas");
var stateMenu = 0;
buttonEntradas.addEventListener("click", function () {
    if (stateMenu == 0) {
        menuEntradas.style.visibility = "visible";
        menuEntradas.style.opacity = "1";
        stateMenu = 1;
    } else if (stateMenu == 1) {
        menuEntradas.style.visibility = "hidden";
        menuEntradas.style.opacity = "0";
        stateMenu = 0;
    }
});

$(window).click(function (event) {
    if (event.target != buttonEntradas) {
        menuEntradas.style.visibility = "hidden";
        menuEntradas.style.opacity = "0";
        stateMenu = 0;
    }

    if (event.target != buttonEntradasMobile) {
        for (var i = 0; i < optionsEntradasMobile.length; i++) {
            optionsEntradasMobile[i].style.transform = "translateY(-100%)";
        }
        stateMenuMobile = 0;
    }
});

var buttonEntradasMobile = document.getElementById("button-entradas-mobile");
var optionsEntradasMobile = document.getElementsByClassName("options-mobile");
var stateMenuMobile = 0;
buttonEntradasMobile.addEventListener("click", function () {
    if (stateMenuMobile == 0) {
        for (var i = 0; i < optionsEntradasMobile.length; i++) {
            optionsEntradasMobile[i].style.transform = "translateY(0%)";
        }
        stateMenuMobile = 1;
    } else {
        for (var i = 0; i < optionsEntradasMobile.length; i++) {
            optionsEntradasMobile[i].style.transform = "translateY(-100%)";
        }
        stateMenuMobile = 0;
    }
});


$(window).scroll(function(){
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollPos > 100){
        $("#header").css("top", "5px");
        $("#headerBackground").css({"transform": "translateY(0%)"});
        
    }else{
        $("#header").css("top", "50px");
        $("#headerBackground").css({"transform": "translateY(-100%)"});
    }
});

$("#buttonMenuMobileOpen").click(function(){
    $("#nav-mobile").css({
        "visibility":"visible",
        "opacity":"1"
    });
});

$("#close-menu-mobile").click(function(){
    $("#nav-mobile").css({
        "visibility":"hidden",
        "opacity":"0"
    });
});
