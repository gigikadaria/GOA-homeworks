let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;

    if (username.length < 3) {
        alert("სახელს უნდა ჰქონდეს მინიმუმ 3 ასო");
        return;
    }

    if (!email.includes("@")) {
        alert("Email უნდა შეიცავდეს @-ს");
        return;
    }

    if (password.length < 8) {
        alert("პაროლს უნდა ჰქონდეს მინიმუმ 8 სიმბოლო");
        return;
    }

    if (age === "") {
        alert("ასაკის ველი არ უნდა იყოს ცარიელი");
        return;
    }

    if (phone === "") {
        alert("ტელეფონის ნომრის ველი არ უნდა იყოს ცარიელი");
        return;
    }

    console.log("Form Submitted Succesfully!");
});
