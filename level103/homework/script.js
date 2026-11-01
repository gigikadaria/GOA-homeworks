
document.getElementById("form2").addEventListener("submit", function(event) {
    let username = document.getElementById("username").value;
    let error = document.getElementById("error2");

    if (username.trim() === "" || username.length < 5 || username.length > 15) {
        event.preventDefault();
        error.textContent = "Username must be between 5 and 15 characters!";
    } else {
        error.textContent = "Username is valid!";
        error.style.color = "green";
    }
});

document.getElementById("form3").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let error = document.getElementById("error3");

    if (password !== confirm) {
        event.preventDefault();
        error.textContent = "Passwords do not match!";
    } else {
        error.textContent = "Passwords match!";
        error.style.color = "green";
    }
});

document.getElementById("form4").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("error4");

    if (!email.includes("@") || !email.includes(".")) {
        event.preventDefault();
        error.textContent = "Invalid email!";
    } else if (age <= 18) {
        event.preventDefault();
        error.textContent = "Age must be greater than 18!";
    } else if (!phone.startsWith("5")) {
        event.preventDefault();
        error.textContent = "Phone must start with 5!";
    } else {
        error.textContent = "All information is valid!";
        error.style.color = "green";
    }
});

document.getElementById("form5").addEventListener("submit", function(event) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let error = document.getElementById("error5");

    if (firstName === "" || firstName[0] !== firstName[0].toUpperCase()) {
        event.preventDefault();
        error.textContent = "First name must start with a capital letter!";
    } else if (lastName === "" || lastName[0] !== lastName[0].toUpperCase()) {
        event.preventDefault();
        error.textContent = "Last name must start with a capital letter!";
    } else {
        error.textContent = "Names are valid!";
        error.style.color = "green";
    }
});
