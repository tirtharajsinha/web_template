var navstate = false;

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("pagebody").classList.add("addblur");
    navstate = true;
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("pagebody").classList.remove("addblur");
    navstate = false;
}

function close_on_click() {
    if (screen.width < 800 && navstate) {
        closeNav();
    }
}

window.onscroll = function() {
    scrolltracker();
};

function scrolltracker() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}