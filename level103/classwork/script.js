const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const usernameValue = e.target.username.value;
  const emailValue = e.target.email.value;
  const passwordValue = e.target.password.value;
  const ageValue = e.target.age.value;


  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("ageError").textContent = "";

  e.target.username.style.borderColor = "black";
  e.target.email.style.borderColor = "black";
  e.target.password.style.borderColor = "black";
  e.target.age.style.borderColor = "black";


  if (usernameValue.length <= 7) {
    const usernameError = document.getElementById("usernameError");
    usernameError.textContent = "Username must be more than 7 characters";
    e.target.username.style.borderColor = "red";
    e.target.username.style.borderRadius = "5px";
    return;
  }


  if (!emailValue.includes("@")) {
    const emailError = document.getElementById("emailError");
    emailError.textContent = "Email must include '@'";
    e.target.email.style.borderColor = "red";
    e.target.email.style.borderRadius = "5px";
    return;
  }

  const startsWithCapital = /^[A-Z]/.test(passwordValue);
  if (passwordValue.length < 8 || !startsWithCapital) {
    const passwordError = document.getElementById("passwordError");
    passwordError.textContent = "Password must be 8+ chars and start with uppercase";
    e.target.password.style.borderColor = "red";
    e.target.password.style.borderRadius = "5px";
    return;
  }

  if (ageValue === "" || Number(ageValue) <= 0) {
    const ageError = document.getElementById("ageError");
    ageError.textContent = "Please enter a valid age";
    e.target.age.style.borderColor = "red";
    e.target.age.style.borderRadius = "5px";
    return;
  }

  console.log("Submit Success!");
});