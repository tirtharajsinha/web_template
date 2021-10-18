function emailvalidator() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (document.getElementById("email").value.match(mailformat)) {
    document.getElementById("response").style.visibility = "visible";
    document.getElementById("email").value = "";
  } else {
    document.getElementById("response").style.visibility = "hidden";
  }
}
