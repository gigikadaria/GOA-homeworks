let images = ["image1.jpg", "image2.jpg", "image3.jpg"];

let index = 0;

let image = document.getElementById("image");

document.getElementById("next").addEventListener("click", function() {
    index++;

    if (index == images.length) {
        index = 0;
    }

    image.src = images[index];
});

document.getElementById("previous").addEventListener("click", function() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    image.src = images[index];
});


// 3) Event Propagation
// Event propagation არის პროცესი, როდესაც event
// ელემენტიდან მის მშობელ ელემენტებამდე გადადის.
// მაგალითად, თუ div-ში button გვაქვს და button-ს დავაჭერთ,
// event შეიძლება button-იდან div-მდე გავრცელდეს.


// 4) Bubbling და Capturing
// Bubbling-ის დროს event იწყება ყველაზე შიდა ელემენტიდან
// და შემდეგ გადადის მშობელ ელემენტებზე.
//
// Capturing-ის დროს event იწყება ყველაზე გარე ელემენტიდან
// და შემდეგ გადადის შიდა ელემენტებისკენ.
//
// მაგალითად:
// Capturing: div -> button
// Bubbling: button -> div


let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(password);
});