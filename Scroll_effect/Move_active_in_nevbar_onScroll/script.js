var menu1 = $("#menu1").offset().top - 380; //section height + nabvar height + main div padding (Optional)
var menu2 = $("#menu2").offset().top - 380; //section height + nabvar height + main div padding (Optional)
var menu3 = $("#menu3").offset().top - 380; //section height + nabvar height + main div padding (Optional)
var menu4 = $("#menu4").offset().top - 380; //section height + nabvar height + main div padding (Optional)
var menu5 = $("#menu5").offset().top - 380; //section height + nabvar height + main div padding (Optional)
// document.querySelector("#menu_btn1").classList.add("active");

$(window).scroll(function () {
  var _wscoll = $(window).scrollTop();
  console.log(_wscoll + " " + menu1 + " " + menu2);
  if (_wscoll >= menu1 && _wscoll < menu2) {
    console.log("menu1");
    removeactive();
    addactive(1);
  } else if (_wscoll >= menu2 && _wscoll < menu3) {
    console.log("menu2");
    removeactive();
    addactive(2);
  } else if (_wscoll >= menu3 && _wscoll < menu4) {
    console.log("menu3");
    removeactive();
    addactive(3);
  } else if (_wscoll >= menu4 && _wscoll < menu5) {
    console.log("menu4");
    removeactive();
    addactive(4);
  } else if (_wscoll >= menu5) {
    console.log("menu5");
    removeactive();
    addactive(5);
  } else {
    removeactive();
  }
});

function removeactive() {
  document.querySelectorAll("nav .right a").forEach((element) => {
    element.classList.remove("active");
    console.log("he");
  });
}

function addactive(index) {
  document.querySelectorAll("nav .right a")[index - 1].classList.add("active");
}
