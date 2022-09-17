let nev = false;
let text_color = "#d8dee9";
current_theme = localStorage.getItem("current-theme");
if (current_theme == null) {
  localStorage.setItem("current-theme", "dark");
  current_theme = "dark";
}

if (current_theme == "light") {
  text_color = "#3b4252";
  document.body.classList.toggle("light-theme");
  myChart.config.options.scales.x.ticks.color = "#3b4252";
  myChart.config.options.scales.y.ticks.color = "#3b4252";
  gaugechart.title.update({
    text: "Activity",
    style: {
      fontSize: "20px",
      color: text_color,
    },
  });
  document.querySelector("#theme-toggle").classList.toggle("fa-moon");
  document.querySelector("#theme-toggle").classList.toggle("fa-eclipse-alt");
} else {
  myChart.config.options.scales.x.ticks.color = "#3b4252";
  myChart.config.options.scales.y.ticks.color = "#3b4252";
  gaugechart.title.update({
    text: "Activity",
    style: {
      fontSize: "20px",
      color: text_color,
    },
  });
}

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
    interval: 10000,
  });
  splide.on("autoplay:playing", function (rate) {
    // console.log(rate); // 0-1
  });

  splide.mount();
});

document.querySelector(".splide__list").addEventListener("click", (e) => {
  document.querySelector(".splide__toggle").click();
});

let cc_state = false;

document.querySelector("#control-center-btn").addEventListener("click", (e) => {
  document
    .querySelector("#control-center-btn")
    .classList.toggle("control-c-btn");
  if (document.querySelector("body").clientWidth <= 900) {
    document.querySelector(".control-center").classList.toggle("cc-open");
    console.log("cc");
    cc_state = true;
  } else {
    document.querySelector(".usercard").classList.toggle("toggle-usercard");
    document.querySelector(".actionbox").classList.toggle("toggle-action");
  }
});

$(document).on("click", function (e) {
  var container = document.querySelector(".control-center");
  var btn = document.querySelector("#control-center-btn");
  if (document.querySelector("body").clientWidth <= 900) {
    if (
      !$(e.target).closest(container).length &&
      !$(e.target).closest(btn).length &&
      cc_state
    ) {
      document
        .querySelector("#control-center-btn")
        .classList.remove("control-c-btn");
      document.querySelector(".control-center").classList.remove("cc-open");
    }
  }
});

document.querySelector("#theme-toggle").addEventListener("click", (e) => {
  show_loader();
  if (current_theme == "dark") {
    current_theme = "light";
    text_color = "#3b4252";
    myChart.config.options.scales.x.ticks.color = "#3b4252";
    myChart.config.options.scales.y.ticks.color = "#3b4252";
    gaugechart.title.update({
      text: "Activity",
      style: {
        fontSize: "20px",
        color: text_color,
      },
    });
  } else {
    current_theme = "dark";
    text_color = "#d8dee9";
    myChart.config.options.scales.x.ticks.color = "#d8dee9";
    myChart.config.options.scales.y.ticks.color = "#d8dee9";
    gaugechart.title.update({
      text: "Activity",
      style: {
        fontSize: "20px",
        color: text_color,
      },
    });
  }
  myChart.update();
  document.body.classList.toggle("light-theme");
  document.querySelector("#theme-toggle").classList.toggle("fa-moon");
  document.querySelector("#theme-toggle").classList.toggle("fa-eclipse-alt");
  localStorage.setItem("current-theme", current_theme);
});



function show_loader() {
  if(current_theme=="dark"){
    // document.querySelector(".ani-box").style.transform="scaleX(-1)";
  }
  document.querySelector(".theme-loader").style.display = "flex";
  document.querySelector(".ani-box").classList.add("change_theme");
  document.querySelector(".exp-box").classList.add("exp-expand");

  setTimeout(() => {
    document.querySelector(".theme-loader").style.display = "none";
    document.querySelector(".exp-box").classList.remove("exp-expand");
  }, 1120);

  setTimeout(() => {
    document.querySelector(".ani-box").classList.remove("change_theme");
    
    
  }, 1200);
}
