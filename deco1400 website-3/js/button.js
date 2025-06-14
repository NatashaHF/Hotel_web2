
function bookFunction() {
  var txt;
  if (confirm("Booking confirmed !")) {
    txt = "Booking confirmed !";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementsByClassName("book").innerHTML = txt;
}

function clickReserve() {
    var txt;
    if (confirm("You have successfully reserve !")) {
        txt = "You have successfully reserve !";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementsByClassName("reserve").innerHTML = txt;
}

function clickSubmit() {
    var txt;
    if (confirm("Your feedback has been submitted !")) {
        txt = "Your feedback has been submitted !";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementsById("submit").innerHTML = txt;
}
