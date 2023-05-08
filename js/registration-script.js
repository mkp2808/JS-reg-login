var fname = document.getElementById("fname");
var mname = document.getElementById("mname");
var lname = document.getElementById("lname");

var gender1 = document.getElementById("gender1");
var gender2 = document.getElementById("gender2");

var dob = document.getElementById("dob");

var caste1 = document.getElementById("caste1");
var caste2 = document.getElementById("caste2");
var caste3 = document.getElementById("caste3");
var caste4 = document.getElementById("caste4");

var lang1 = document.getElementById("lang1");
var lang2 = document.getElementById("lang2");
var lang3 = document.getElementById("lang3");
var lang4 = document.getElementById("lang4");

var education = document.getElementById("education");

var city1 = document.getElementById("city1");
var city2 = document.getElementById("city2");
var city3 = document.getElementById("city3");
var city4 = document.getElementById("city4");

var address = document.getElementById("address");


var phone = document.getElementById("phone");

var reg_mail = document.getElementById("reg_mail");
var reg_pass = document.getElementById("reg_pass");
var cpass = document.getElementById("cpass");
var check = document.getElementById("agree");

document.addEventListener("keydown", function (event) {
  // If the Enter key is pressed and the form field is not a textarea
  if (event.key == "Enter") {
    // Prevent the default form submission behavior
    event.preventDefault();
  }
});

function Validate_reg() {
  var status;

  var fnameStatus;
  var mnameStatus;
  var lnameStatus;
  var genderStatus;
  var dobStatus;
  var casteStatus;
  var langStatus;
  var educationStatus;
  var cityStatus;
  var addressStatus;
  var phoneStatus;
  var reg_mailStatus;
  var reg_passStatus;
  var cpassStatus;
  var checkStatus;


  // First Name
  if (fname.value != "") {
    if (fname.value.match(/^[A-Za-z]+$/)) {
      fnameStatus = true;
    } else {
      document.getElementById("fname-alert").innerHTML =
        "<b>Only Alphabets are allowed in names</b>";
      document.getElementById("fname-alert").style.display = "block";
      fnameStatus = false;
    }
  } else {
    document.getElementById("fname-alert").innerHTML =
      "<b>First name should not be empty</b>";
    document.getElementById("fname-alert").style.display = "block";
    fnameStatus = false;
  }


  // Middle Name
  if (mname.value != "") {
    if (mname.value.match(/^[A-Za-z]+$/)) {
      mnameStatus = true;
    } else {
      document.getElementById("mname-alert").innerHTML =
        "<b>Only Alphabets are allowed in names</b>";
      document.getElementById("mname-alert").style.display = "block";
      mnameStatus = false;
    }
  } else {
    document.getElementById("mname-alert").innerHTML =
      "<b>Middle name should not be empty</b>";
    document.getElementById("mname-alert").style.display = "block";
    mnameStatus = false;
  }


  // Last Name
  if (lname.value != "") {
    if (lname.value.match(/^[A-Za-z]+$/)) {
      lnameStatus = true;
    } else {
      document.getElementById("lname-alert").innerHTML =
        "<b>Only Alphabets are allowed in names</b>";
      document.getElementById("lname-alert").style.display = "block";
      lnameStatus = false;
    }
  } else {
    document.getElementById("lname-alert").innerHTML =
      "<b>Last name should not be empty</b>";
    document.getElementById("lname-alert").style.display = "block";
    lnameStatus = false;
  }

  // Gender
  if (gender1.checked || gender2.checked) {
    genderStatus = true;
  }
  else {
    document.getElementById("gender-alert").innerHTML =
      "<b>Select one from the genders</b>";
    document.getElementById("gender-alert").style.display = "block";
    genderStatus = false;
  }



  // dob
  if (dob.value.trim() != "") {
    // console.log(dob.value);
    var today = new Date();
    var birthDate = new Date(dob.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0) {
      age--;
    }
    console.log(age);
    // console.log(m);
    // console.log(d);
    if (age >= 18 && age <= 65) {
      dobStatus = true;
    }
    else {
      document.getElementById("dob-alert").innerHTML = "<b>Age must be between 18 to 65</b>";
      document.getElementById("dob-alert").style.display = "block";
      dobStatus = false;
    }
  }
  else {
    document.getElementById("dob-alert").innerHTML = "<b>Select the date of birth</b>";
    document.getElementById("dob-alert").style.display = "block";
    dobStatus = false;
  }



  //Caste
  if (caste1.checked || caste2.checked || caste3.checked || caste4.checked) {
    casteStatus = true;
  }
  else {
    document.getElementById("caste-alert").innerHTML = "<b>Select your caste</b>";
    document.getElementById("caste-alert").style.display = "block";
    dobStatus = false;
  }



  //Language
  if (lang1.checked || lang2.checked || lang3.checked || lang4.checked) {
    langStatus = true;
  }
  else {
    document.getElementById("lang-alert").innerHTML = "<b>Select your language</b>";
    document.getElementById("lang-alert").style.display = "block";
    langStatus = false;
  }

  //Education
  if (education.value != "") {
    educationStatus = true;
  }
  else {
    document.getElementById("education-alert").innerHTML = "<b>Enter you education</b>";
    document.getElementById("education-alert").style.display = "block";
    educationStatus = false;
  }


  // City
  if (city1.selected || city2.selected || city3.selected || city4.selected) {
    cityStatus = true;
  }
  else {
    document.getElementById("city-alert").innerHTML = "<b>Select your city</b>";
    document.getElementById("city-alert").style.display = "block";
    cityStatus = false;
  }

  // Address
  if (address.value != "") {
    if (address.value.match(/^[a-zA-Z0-9,.-]*$/)) {
      addressStatus = true;
    }
    else {
      document.getElementById("address-alert").innerHTML = "<b>Address must contain only alphabets, numbers and few spacial characteres(,.-)</b>";
      document.getElementById("address-alert").style.display = "block";
      addressStatus = false;
    }

  }
  else {
    document.getElementById("address-alert").innerHTML = "<b>Enter you address</b>";
    document.getElementById("address-alert").style.display = "block";
    addressStatus = false;
  }

  if (phone.value != "") {
    const regex = /^[6789]\d{9}$/;
    if (phone.value.match(regex)) {
      phoneStatus = true;
    }
    else if (phone.value.match(/^[A-Za-z]+$/)) {
      document.getElementById("phone-alert").innerHTML = "<b>Only numbers are allowed</b>";
      document.getElementById("phone-alert").style.display = "block";
      addressStatus = false;
    }
    else {
      document.getElementById("phone-alert").innerHTML = "<b>Enter valid phone number</b>";
      document.getElementById("phone-alert").style.display = "block";
      addressStatus = false;
    }
  }
  else {
    document.getElementById("phone-alert").innerHTML = "<b>Phone number should not be empty</b>";
    document.getElementById("phone-alert").style.display = "block";
    addressStatus = false;
  }


  // Mail 
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg_mail.value != "") {
    // mail
    if (reg_mail.value.match(mailformat)) {
      reg_mailStatus = true;
    } else {
      document.getElementById("reg_mail_alert").innerHTML =
        "<b>Enter Proper Email id</b>";
      document.getElementById("reg_mail_alert").style.display = "block";
      reg_mailStatus = false;
    }
  } else {
    document.getElementById("reg_mail_alert").innerHTML =
      "<b>Email should not be empty</b>";
    document.getElementById("reg_mail_alert").style.display = "block";
    reg_mailStatus = false;
  }




  // Password
  if (reg_pass.value != "") {
    if (reg_pass.value.length >= 8) {
      reg_passStatus = true;
    } else {
      document.getElementById("reg_pass_alert").innerHTML =
        "<b>Password length should be of atleast 8</b>";
      document.getElementById("reg_pass_alert").style.display = "block";
      reg_passStatus = false;
    }
  } else {
    document.getElementById("reg_pass_alert").innerHTML =
      "<b>Password should not be empty</b>";
    document.getElementById("reg_pass_alert").style.display = "block";
    reg_passStatus = false;
  }



  // Confirm Password
  if (cpass.value != "") {
    if (reg_pass.value == cpass.value) {
      cpassStatus = true;
    } else {
      document.getElementById("cpass-alert").innerHTML =
        "<b>Confirm Password does not match</b>";
      document.getElementById("cpass-alert").style.display = "block";
      cpassStatus = false;
    }
  } else {
    document.getElementById("cpass-alert").innerHTML =
      "<b>Confirm Password should not be empty</b>";
    document.getElementById("cpass-alert").style.display = "block";
    cpassStatus = false;
  }



  // Terms and conditions
  if (check.checked == true) {
    checkStatus = true;
  } else {
    document.getElementById("terms-alert").innerHTML =
      "<b>Please mark the checkbox</b>";
    document.getElementById("terms-alert").style.display = "block";
    checkStatus = false;
  }



  fnameStatus && lnameStatus && dobStatus && casteStatus && langStatus && educationStatus && cityStatus && addressStatus && mnameStatus && phoneStatus && reg_mailStatus && genderStatus && reg_passStatus && cpassStatus && checkStatus ? status = true : status = false;


  // value of Gender
  var gend_val;
  if (gender1.checked) {
    gend_val = "Male";
  }
  else if (gender2.checked) {
    gend_val = "Female";
  }


  // value of Language
  var lang_val;
  if (lang1.checked) {
    lang_val = "Gujarati";
  }
  else if (lang2.checked) {
    lang_val = "Hindi";
  }
  else if (lang3.checked) {
    lang_val = "English";
  }
  else if (lang4.checked) {
    lang_val = "Marathi";
  }

  // value of Language
  var city_val;
  if (city1.selected) {
    city_val = "Ahmedabad";
  }
  else if (city2.selected) {
    city_val = "Mumbai";
  }
  else if (city3.selected) {
    city_val = "Surat";
  }
  else if (city4.selected) {
    city_val = "Vadodra";
  }


  // value of Caste
  var caste_val;
  if (caste1.checked) {
    caste_val = "General";
  }
  else if (caste2.checked) {
    caste_val = "Obc";
  }
  else if (caste3.checked) {
    caste_val = "Sc";
  }
  else if (caste4.checked) {
    caste_val = "St";
  }

  if (status) {
    alert(
      "First Name : " + fname.value +
      "\nMiddle Name : " + mname.value +
      "\nLast Name : " + lname.value +
      "\nGender : " + gend_val +
      "\nDate of birth : " + dob.value +
      "\nCaste : " + caste_val +
      "\nLanguage : " + lang_val +
      "\nEducation : " + education.value +
      "\nCity : " + city_val +
      "\nAddress : " + address.value +
      "\nPhone no. : " + phone.value +
      "\nEmail : " + reg_mail.value +
      "\nPassword : " + reg_pass.value +
      "\nConfirm Password : " + cpass.value
    )
  }
  return status;
}

fname.addEventListener("input", verify_fname);
mname.addEventListener("input", verify_mname);
lname.addEventListener("input", verify_lname);

gender1.addEventListener("change", verify_gender);
gender2.addEventListener("change", verify_gender);

dob.addEventListener("change", verify_dob);
caste1.addEventListener("change", verify_caste);
caste2.addEventListener("change", verify_caste);
caste3.addEventListener("change", verify_caste);
caste4.addEventListener("change", verify_caste);

lang1.addEventListener("change", verify_lang);
lang2.addEventListener("change", verify_lang);
lang3.addEventListener("change", verify_lang);
lang4.addEventListener("change", verify_lang);

education.addEventListener("input", verify_education);

city1.addEventListener("change", verify_city);
city2.addEventListener("change", verify_city);
city3.addEventListener("change", verify_city);
city4.addEventListener("change", verify_city);

address.addEventListener("input", verify_address);

phone.addEventListener("input", verify_phone);

reg_mail.addEventListener("input", verify_reg_email);
reg_pass.addEventListener("input", verify_reg_pass);
cpass.addEventListener("input", verify_cpass);
check.addEventListener("change", verify_check);

function verify_fname() {
  if (fname.value != "") {
    if (fname.value.match(/^[A-Za-z]+$/)) {
      document.getElementById("fname-alert").style.display = "none";
    }
    else {
      document.getElementById("fname-alert").innerHTML =
        "<b>Only Alphabets are allowed in names</b>";
      document.getElementById("fname-alert").style.display = "block";
    }
  } else {
    document.getElementById("fname-alert").innerHTML =
      "<b>First name should not be empty</b>";
    document.getElementById("fname-alert").style.display = "block";
  }
}

function verify_lname() {
  if (lname.value != "") {
    if (lname.value.match(/^[A-Za-z]+$/)) {
      document.getElementById("lname-alert").style.display = "none";
    } else {
      document.getElementById("lname-alert").innerHTML =
        "<b>Only Alphabets are allowed in names</b>";
      document.getElementById("lname-alert").style.display = "block";
    }
  } else {
    document.getElementById("lname-alert").innerHTML =
      "<b>Last name should not be empty</b>";
    document.getElementById("lname-alert").style.display = "block";
  }
}

function verify_mname() {
  if (mname.value != "") {
    if (mname.value.match(/^[A-Za-z]+$/)) {
      document.getElementById("mname-alert").style.display = "none";
    } else {
      document.getElementById("mname-alert").innerHTML =
        "<b>Only Alphabets are allowed in names</b>";
      document.getElementById("mname-alert").style.display = "block";
    }
  } else {
    document.getElementById("mname-alert").innerHTML =
      "<b>Middle name should not be empty</b>";
    document.getElementById("mname-alert").style.display = "block";
  }
}
function verify_dob() {
  if (dob.value.trim() != "") {
    // console.log(dob.value);
    var today = new Date();
    var birthDate = new Date(dob.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0) {
      age--;
    }
    console.log(age);
    if (age >= 18 && age <= 65) {
      document.getElementById("dob-alert").style.display = "none";
    }
    else {
      document.getElementById("dob-alert").innerHTML = "<b>Age must be between 18 to 65</b>";
      document.getElementById("dob-alert").style.display = "block";
    }
  }
  else {
    document.getElementById("dob-alert").innerHTML = "<b>Select the date of birth</b>";
    document.getElementById("dob-alert").style.display = "block";
  }
}

function verify_gender() {
  if (gender1.checked || gender2.checked) {
    document.getElementById("gender-alert").style.display = "none";
  }
  else {
    document.getElementById("gender-alert").innerHTML =
      "<b>Select one from the genders</b>";
    document.getElementById("gender-alert").style.display = "block";
  }
}

function verify_caste() {
  if (caste1.checked || caste2.checked || caste3.checked || caste4.checked) {
    document.getElementById("caste-alert").style.display = "none";
  }
  else {
    document.getElementById("caste-alert").innerHTML = "<b>Select your caste</b>";
    document.getElementById("caste-alert").style.display = "block";
  }
}
function verify_lang() {
  if (lang1.checked || lang2.checked || lang3.checked || lang4.checked) {
    document.getElementById("lang-alert").style.display = "none";
  }
  else {
    document.getElementById("lang-alert").innerHTML = "<b>Select your language</b>";
    document.getElementById("lang-alert").style.display = "block";
  }
}
function verify_education() {
  if (education.value != "") {
    document.getElementById("education-alert").style.display = "none";
  }
  else {
    document.getElementById("education-alert").innerHTML = "<b>Enter you education</b>";
    document.getElementById("education-alert").style.display = "block";
  }
}
function verify_city() {
  if (city1.checked || city2.checked || city3.checked || city4.checked) {
  }
  else {
    document.getElementById("city-alert").innerHTML = "<b>Select your city</b>";
    document.getElementById("city-alert").style.display = "block";
  }
}

function verify_address() {
  if (address.value != "") {
    if (address.value.match(/^[a-zA-Z0-9,.-]*$/)) {
      document.getElementById("address-alert").style.display = "none";
    }
    else {
      document.getElementById("address-alert").innerHTML = "<b>Address must contain only alphabets, numbers and few spacial characteres(,.-)</b>";
      document.getElementById("address-alert").style.display = "block";
    }
  }
  else {
    document.getElementById("address-alert").innerHTML = "<b>Enter your address</b>";
    document.getElementById("address-alert").style.display = "block";
  }
}
function verify_phone() {
  if (phone.value != "") {
    // const regex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    const regex = /^[6789]\d{9}$/;
    if (phone.value.match(regex)) {
      document.getElementById("phone-alert").style.display = "none";
    }
    else if (phone.value.match(/^[A-Za-z]+$/)) {
      document.getElementById("phone-alert").innerHTML = "<b>Only numbers are allowed</b>";
      document.getElementById("phone-alert").style.display = "block";
    }
    else {
      document.getElementById("phone-alert").innerHTML = "<b>Enter valid phone number</b>";
      document.getElementById("phone-alert").style.display = "block";
    }
  }
  else {
    document.getElementById("phone-alert").innerHTML = "<b>Phone number should not be empty</b>";
    document.getElementById("phone-alert").style.display = "block";
  }

}

function verify_reg_email() {
  if (reg_mail.value != "") {
    if (reg_mail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      document.getElementById("reg_mail_alert").style.display = "none";
    } else {
      document.getElementById("reg_mail_alert").innerHTML =
        "<b>Enter Proper Email id</b>";
      document.getElementById("reg_mail_alert").style.display = "block";
    }
  } else {
    document.getElementById("reg_mail_alert").innerHTML =
      "<b>Email should not be empty</b>";
    document.getElementById("reg_mail_alert").style.display = "block";
  }
}


function verify_reg_pass() {
  if (reg_pass.value != "") {
    if (reg_pass.value.length >= 8) {
      document.getElementById("reg_pass_alert").style.display = "none";
    } else {
      document.getElementById("reg_pass_alert").innerHTML =
        "<b>Password length should be of atleast 8</b>";
      document.getElementById("reg_pass_alert").style.display = "block";
    }
  } else {
    document.getElementById("reg_pass_alert").innerHTML =
      "<b>Password should not be empty</b>";
    document.getElementById("reg_pass_alert").style.display = "block";
  }
}

function verify_cpass() {
  if (cpass.value != "") {
    if (cpass.value == reg_pass.value) {
      document.getElementById("cpass-alert").style.display = "none";
    } else {
      document.getElementById("cpass-alert").innerHTML =
        "<b>Confirm Password does not match </b>";
      document.getElementById("cpass-alert").style.display = "block";
    }
  } else {
    document.getElementById("cpass-alert").innerHTML =
      "<b>Confrim Password should not be empty</b>";
    document.getElementById("cpass-alert").style.display = "block";
  }
}

function verify_check() {
  if (check.checked) {
    document.getElementById("terms-alert").style.display = "none";
  }
  else {
    document.getElementById("terms-alert").innerHTML =
      "<b>Please mark the checkbox</b>";
    document.getElementById("terms-alert").style.display = "block";
  }
}
