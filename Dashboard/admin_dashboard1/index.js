let nev = false;

document.getElementById("expandbar").addEventListener("click", (e) => {
  if (document.querySelector(".sidebar").clientWidth <= 60) {
    nev = true;

    var r = document.querySelector(":root");
    r.style.setProperty("--mob-nev", "300px");

    setTimeout(() => {
      r.style.setProperty("--mob-brand-img", "50px");
      r.style.setProperty("--mob-nev-ul-marginleft", "20px");
      r.style.setProperty("--mob-nev-ul-margin", "auto");
      r.style.setProperty("--mob-nev-ul-h3", "block");
      r.style.setProperty("--mob-nev-ul-a-marginleft", "25px");
      r.style.setProperty("--mob-nev-ul-a-span", "inline");
      r.style.setProperty("--mob-nev-ul-i-marginright", "20px");
      r.style.setProperty("--mob-hrs", "none");
    }, 200);
  } else if (nev) {
    nev = true;

    var r = document.querySelector(":root");
    r.style.setProperty("--mob-nev", "60px");
    r.style.setProperty("--mob-brand-img", "30px");
    r.style.setProperty("--mob-nev-ul-marginleft", "0px");
    r.style.setProperty("--mob-nev-ul-margin", "auto");
    r.style.setProperty("--mob-nev-ul-h3", "none");
    r.style.setProperty("--mob-nev-ul-a-marginleft", "7px");
    r.style.setProperty("--mob-nev-ul-a-span", "none");
    r.style.setProperty("--mob-nev-ul-i-marginright", "0px");
    r.style.setProperty("--mob-hrs", "block");
  }
});

document.querySelector(".container").addEventListener("click", (e) => {
  if (nev) {
    nev = true;

    var r = document.querySelector(":root");
    r.style.setProperty("--mob-nev", "60px");
    r.style.setProperty("--mob-brand-img", "30px");
    r.style.setProperty("--mob-nev-ul-marginleft", "0px");
    r.style.setProperty("--mob-nev-ul-margin", "auto");
    r.style.setProperty("--mob-nev-ul-h3", "none");
    r.style.setProperty("--mob-nev-ul-a-marginleft", "7px");
    r.style.setProperty("--mob-nev-ul-a-span", "none");
    r.style.setProperty("--mob-nev-ul-i-marginright", "0px");
    r.style.setProperty("--mob-hrs", "block");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: "play",
    perPage: 1,
    interval:10000
  });
  splide.on("autoplay:playing", function (rate) {
    // console.log(rate); // 0-1
  });

  splide.mount();
});


document.querySelector(".splide__list").addEventListener("click",(e)=>{
  document.querySelector(".splide__toggle").click();
})

let cc_state=false;

document.querySelector("#control-center-btn").addEventListener("click",(e)=>{
  document.querySelector("#control-center-btn").classList.toggle("control-c-btn");
  if(document.querySelector("body").clientWidth <= 900){
    document.querySelector(".control-center").classList.toggle("cc-open");
    console.log("cc");
    cc_state=true;
  }
})





$(document).on('click', function(e) {
  var container = document.querySelector(".control-center");
  var btn=document.querySelector("#control-center-btn")
  if (!$(e.target).closest(container).length && !$(e.target).closest(btn).length && cc_state) {
    document.querySelector("#control-center-btn").classList.remove("control-c-btn");
    document.querySelector(".control-center").classList.remove("cc-open");
  }
});