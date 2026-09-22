let box1 = document.getElementById("box1");
let plus = document.getElementById("plus");

let size = 50;

plus.onclick = function() {
    size = size + 10;

    box1.style.width = size + "px";
    box1.style.height = size + "px";
};


let box2 = document.getElementById("box2");

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

red.onclick = function() {
    box2.style.backgroundColor = "red";
};

yellow.onclick = function() {
    box2.style.backgroundColor = "yellow";
};

green.onclick = function() {
    box2.style.backgroundColor = "green";
};
