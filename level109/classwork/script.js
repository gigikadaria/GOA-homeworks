const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameValue = e.target.firstName.value;
  const lastNameValue = e.target.lastName.value;
  const emailValue = e.target.email.value;
  const passwordValue = e.target.password.value;
  const repeatPasswordValue = e.target.repeatPassword.value;

  if (
    firstNameValue === "" ||
    lastNameValue === "" ||
    emailValue === "" ||
    !emailValue.includes("@")
  ) {
    alert("Email Type Error or Empty Fields!");
    return;
  }

  if (passwordValue === "" || passwordValue !== repeatPasswordValue) {
    alert("Passwords do not match!");
    return;
  }

  const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

  const existingUser = allUsers.find((user) => user.email === emailValue);

  if (existingUser) {
    alert("User with this email already exists!");
    return;
  }

  const newUser = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    password: passwordValue,
  };

  allUsers.push(newUser);
  localStorage.setItem("allUsers", JSON.stringify(allUsers));

  alert("Registration Successful!");
  myForm.reset();
});