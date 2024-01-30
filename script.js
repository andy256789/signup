const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

const errorMessage = document.querySelector(".error_message");
const button = document.querySelector(".submitButton")

function verifyPassword(){
    if(!confirmPassword.value) return

    if(password.value===confirmPassword.value){
        confirmPassword.classList.remove("error");
        password.classList.remove("error");
        errorMessage.textContent = "";
        button.disabled = false;
    }else{
        confirmPassword.classList.add("error");
        password.classList.add("error");
        errorMessage.textContent = "* Passwords do not match";
        button.disabled = true;

    }
}

confirmPassword.addEventListener("focusout", () => verifyPassword());
password.addEventListener("focusout", () => verifyPassword());