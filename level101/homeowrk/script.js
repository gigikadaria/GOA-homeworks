
document.getElementById("form2").addEventListener("submit", function(event) {
    let username = document.getElementById("username").value;

    if (username.length < 5 || username.length > 15 || username.trim() === "") {
        event.preventDefault();
        alert("Username must be between 5 and 15 characters!");
    }
});

document.getElementById("form3").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (password !== confirm) {
        event.preventDefault();
        alert("Passwords do not match!");
    }
});

document.getElementById("form4").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;

    if (!email.includes("@") || !email.includes(".")) {
        event.preventDefault();
        alert("Invalid Email!");
    }

    if (age <= 18) {
        event.preventDefault();
        alert("Age must be greater than 18!");
    }

    if (!phone.startsWith("5")) {
        event.preventDefault();
        alert("Phone must start with 5!");
    }
});

document.getElementById("form5").addEventListener("submit", function(event) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (firstName === "" || firstName[0] !== firstName[0].toUpperCase()) {
        event.preventDefault();
        alert("FirstName must start with a capital letter!");
    }

    if (lastName === "" || lastName[0] !== lastName[0].toUpperCase()) {
        event.preventDefault();
        alert("LastName must start with a capital letter!");
    }
});
