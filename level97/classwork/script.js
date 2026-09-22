let timer = 10;

let interval = setInterval(function() {
    console.log(timer);
    timer--;

    if (timer < 0) {
        console.log("BOOOM!!!!");
        clearInterval(interval);
    }
}, 1000);


let box = document.getElementById("box");
let width = 100;

box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";

let interval2 = setInterval(function() {
    width += 5;
    box.style.width = width + "px";

    if (width >= 500) {
        clearInterval(interval2);
    }
}, 1000);