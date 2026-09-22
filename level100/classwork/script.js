let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let telNumber = document.getElementById("tel-number").value;
    let password = document.getElementById("password").value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(telNumber);
    console.log(password);
});
