function confirm(){
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("confirmPass").value;


    if(password != confirmPassword){
        document.getElementById("message").innerHTML = "**Passwords are not same";
        return false;
    }
    else{
        alert("Your password created successfully");
    }
}

