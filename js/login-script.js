var login_mail = document.getElementById("login_mail");
var login_pass = document.getElementById("login_pass");

document.addEventListener("keydown", function (event) {
    console.log(event.target.tagName)
    // If the Enter key is pressed and the form field is not a textarea
    if (event.key === "Enter") {
        // Prevent the default form submission behavior
        event.preventDefault();
    }
});

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function Validate_login() {
    var mailStatus;
    var passStatus;
    var status;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (login_mail.value != "") {
        // mail
        if (login_mail.value.match(mailformat)) {
            mailStatus = true;
        }
        else {
            document.getElementById("login_mail_alert").innerHTML = "<b>Enter Valid Email id</b>"
            document.getElementById("login_mail_alert").style.display = "block";
            mailStatus = false;
        }
    } else {
        document.getElementById("login_mail_alert").innerHTML = "<b>Email should not be empty</b>"
        document.getElementById("login_mail_alert").style.display = "block";
        mailStatus = false;
    }


    if (login_pass.value != "") {
        // password validataion
        if (login_pass.value.length >= 8) {
            passStatus = true;
        }
        else {
            document.getElementById("login_pass_alert").innerHTML = "<b>Password length should be of atleast 8</b>"
            document.getElementById("login_pass_alert").style.display = "block";
            passStatus = false;
        }
    }
    else {

        document.getElementById("login_pass_alert").innerHTML = "<b>Password should not be empty</b>"
        document.getElementById("login_pass_alert").style.display = "block";
        passStatus = false;
    }

    mailStatus && passStatus ? status = true : status = false;

    return status;

}
login_mail.addEventListener('input', verify_email);
login_pass.addEventListener('input', verify_pass);
// pwd.addEventListener('textInput', verify_pass);

function verify_email() {

    if (login_mail.value.match(mailformat)) {
        document.getElementById("login_mail_alert").style.display = "none";
    }
    else if (login_mail.value == "") {
        document.getElementById("login_mail_alert").innerHTML = "<b>Email id should not be empty</b>"
        document.getElementById("login_mail_alert").style.display = "block";
    }
    else {
        document.getElementById("login_mail_alert").innerHTML = "<b>Enter valid Email id</b>"
        document.getElementById("login_mail_alert").style.display = "block";
    }
}

function verify_pass() {
    if (login_pass.value.length >= 8) {
        document.getElementById("login_pass_alert").style.display = "none";
    }
    else if (login_pass.value == "") {
        document.getElementById("login_pass_alert").innerHTML = "<b>Password should not be empty</b>"
        document.getElementById("login_pass_alert").style.display = "block";
    }
    else {
        document.getElementById("login_pass_alert").innerHTML = "<b>Password length should be of atleast 8</b>"
        document.getElementById("login_pass_alert").style.display = "block";
    }
}
