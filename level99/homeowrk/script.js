// addEventListener გამოიყენება იმისთვის,
// რომ ელემენტზე რაიმე მოქმედების დროს
// კონკრეტული ფუნქცია შესრულდეს.

let text = document.getElementById("text");

document.getElementById("switch").addEventListener("click", function() {
    if (text.textContent == "no") {
        text.textContent = "yes";
    } else {
        text.textContent = "no";
    }
});


let number = document.getElementById("number");

document.getElementById("random").addEventListener("click", function() {
    number.textContent = Math.floor(Math.random() * 100);
});


let name = document.getElementById("name");

document.getElementById("add").addEventListener("click", function() {
    name.textContent += "გიგი ";
});
