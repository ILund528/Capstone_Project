window.addEventListener("load", function () {
    document.getElementById("formSubmit").addEventListener("click", validation);
});

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
    } else {
        fname.setCustomValidity("");
        fname.required = false;
    }
    if (lname.validity.valueMissing) {
        lname.setCustomValidity("You must include a last name.");
    } else {
        lname.setCustomValidity("");
        lname.required = false;
    }
    if (email.validity.valueMissing && phone.validity.valueMissing) {
        email.setCustomValidity("You must have an email or phone number placed in order for us the contact you.");
        phone.setCustomValidity("You must have an email or phone number placed in order for us the contact you.");
    } else {
        email.setCustomValidity("");
        email.required = false;
        phone.setCustomValidity("");
        phone.required = false;
    }
    if ((hours.selectedIndex === -1 || location.selectedIndex === -1) && donate.validity.valueMissing) {
        hours.setCustomValidity("Please pick to volunteer or donate.");
        location.setCustomValidity("Please pick a location.");
        donate.setCustomValidity("Please use only numbers");
    } else {
        hours.setCustomValidity("");
        hours.required = false;
        location.setCustomValidity("");
        location.required = false;
        donate.setCustomValidity("");
        donate.required = false;
    }
}