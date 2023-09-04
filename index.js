let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

confirmPassword.addEventListener("input", checkPassword);
password.addEventListener("input", checkPassword);

function checkPassword() {
  let enteredPass = password.value;
  let enteredConfirmPass = confirmPassword.value;
  if (enteredPass === enteredConfirmPass) {
    if (enteredPass === "" || enteredConfirmPass === "") {
      console.log(enteredPass);
      password.classList.remove("valid");
      confirmPassword.classList.remove("valid");
      password.classList.remove("error");
      confirmPassword.classList.remove("error");
      return;
    }
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    password.classList.add("valid");
    confirmPassword.classList.add("valid");
    return;
  }

  password.classList.remove("valid");
  confirmPassword.classList.remove("valid");
  password.classList.add("error");
  confirmPassword.classList.add("error");
}
