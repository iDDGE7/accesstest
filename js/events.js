var buttonGates = document.getElementById("button-gates");
var optionGates = document.getElementById("optionGates");
var optionGatesBefore = document.getElementById("optionGates").before;


var toggle = 0;

buttonGates.addEventListener("click", function () {
    if (toggle == 0) {
        optionGates.style.visibility = "visible";
        optionGates.style.opacity = "1";
        toggle = 1;
    } else {
        optionGates.style.visibility = "hidden";
        optionGates.style.opacity = "0";
        toggle = 0;
    }
});


var buttonMenuMobile = document.getElementById("buttonMenuMobile");
var navigation = document.getElementById("navigation");
var toggleNav = 0;

buttonMenuMobile.addEventListener("click", function () {
    if (toggleNav == 0) {
        navigation.style.visibility = "visible";
        navigation.style.opacity = "1";
        toggleNav = 1;
    } else {
        navigation.style.visibility = "hidden";
        navigation.style.opacity = "0";
        toggleNav = 0;
    }
});

// function outclick(element) {

//     while (element != null) {

//         element = element.parentElement;
//         console.log(element);
//     }

//     // for (var i = 0; i < 4; i++) {
//     //     console.log(element.parentElement);
//     //     var element = element.parentElement;
//     // }
// }

// outclick(buttonMenuMobile);


document.addEventListener("click", function () {
    console.log(this);
});