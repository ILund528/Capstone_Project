window.addEventListener("load", function () {
    document.getElementById("formSubmit").addEventListener("click", validation);
});
var circleSpots = ["first", "second", "third", "fourth", "fifth", "sixth", "seveth"];
function redCircle() {
    var f = document.getElementById(circleSpots[x]);
    var ftx = f.getContext("2d");
    ftx.beginPath();
    ftx.arc(5,5,5,0,2*Math.PI);
    ftx.fillStyle = "red";
    ftx.fill();
    var s = document.getElementById("")
}

function greenCircle() {
    var f = document.getElementById(circleSpots[x]);
    var ftx = f.getContext("2d");
    ftx.beginPath();
    ftx.arc(5,5,5,0,2*Math.PI);
    ftx.fillStyle = "green";
    ftx.fill();
    var s = document.getElementById("")
}

function validation() {
    var fname = document.getElementById("fnBox");
    fname.required = true;
    var lname = document.getElementById("lnBox");
    lname.required = true;
    var email = document.getElementById("mailBox");
    email.required = true;
    var phone = document.getElementById("phoneBox");
    phone.required = true;
    var hours = document.getElementById("hBox");
    hours.required = true;
    var location = document.getElementById("volunteerBox");
    location.required = true;
    var donate = document.getElementById("donateBox");
    donate.required = true;
    if (fname.validity.valueMissing) {
        fname.setCustomValidity("You must include a first name.");
        x = 0;
        window.setTimeout(redCircle(x), 500);
    } else {
        fname.setCustomValidity("");
        fname.required = false;
        x = 0;
        window.setTimeout(greenCircle(x), 500);
    }
    if (lname.validity.valueMissing) {
        lname.setCustomValidity("You must include a last name.");
        x = 1;
        window.setTimeout(redCircle(x), 500);
    } else {
        lname.setCustomValidity("");
        lname.required = false;
        x = 1;
        window.setTimeout(greenCircle(x), 500);
    }
    if (email.validity.valueMissing && phone.validity.valueMissing) {
        email.setCustomValidity("You must have an email or phone number placed in order for us the contact you.");
        x = 2;
        window.setTimeout(redCircle(x), 500);
        phone.setCustomValidity("You must have an email or phone number placed in order for us the contact you.");
        x = 3;
        window.setTimeout(redCircle(x), 500);
    } else {
        email.setCustomValidity("");
        email.required = false;
        x = 2;
        window.setTimeout(greenCircle(x), 500);
        phone.setCustomValidity("");
        phone.required = false;
        x = 3;
        window.setTimeout(greenCircle(x), 500);
    }
    if ((hours.selectedIndex === -1 || location.selectedIndex === -1) && donate.validity.valueMissing) {
        hours.setCustomValidity("Please pick to volunteer or donate.");
        x = 4;
        window.setTimeout(redCircle(x), 500);
        location.setCustomValidity("Please pick a location.");
        x = 5;
        window.setTimeout(redCircle(x), 500);
        donate.setCustomValidity("Please use only numbers");
        x = 6;
        window.setTimeout(redCircle(x), 500);
    } else {
        hours.setCustomValidity("");
        hours.required = false;
        x = 4;
        window.setTimeout(greenCircle(x), 500);
        location.setCustomValidity("");
        location.required = false;
        x = 5;
        window.setTimeout(greenCircle(x), 500);
        donate.setCustomValidity("");
        donate.required = false;
        x = 6;
        window.setTimeout(greenCircle(x), 500);
    }
}