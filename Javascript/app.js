// Login Page
function validate() {
    var username = document.logForm.username.value;
    var password = document.logForm.passlog.value;

    if (username == null || username == "") {
        alert("Please enter your email!");
        return false;
    } else if (password == "") {
        alert("Please enter your password!");
        return false;
    } else if (password.length < 8) {
        alert("Please enter the correct password!");
        return false;
    }
    
}

// Sign Up Page
function signAccount() {
    var name = document.signForm.name.value;
    var email = document.signForm.email.value;
    var gender = document.signForm.gender.value;
    var password = document.signForm.password.value;
    var confirm = document.signForm.confirm.value;

    if (name == null || name == "") {
        alert("Name can't be empty!");
        return false;
    } else if (email == null || email == "") {
        alert("Email can't be empty!");
        return false;
    } else if (password == "") {
        alert("Password can't be empty!");
        return false;
    } else if (password.length < 8) {
        alert("Password must be contain 8 character long!");
        return false;
    } else if (confirm == "") {
        alert("Please confirm your password!");
        return false;
    } else if (confirm != password) {
        alert("Password don't match! Please try again!");
        return false;
    } else {
        return true;
    }
}