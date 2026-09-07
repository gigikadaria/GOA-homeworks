
let h1 = document.getElementById("main-title");
console.log(h1);
let h2 = document.getElementsByClassName("subtitle");
console.log(h2);
let h3 = document.getElementsByTagName("h3");
console.log(h3);



let allH1 = document.getElementsByTagName("h1");

allH1[1].textContent = "Hello DOM";
allH1[2].textContent = "Hello again DOM";



let blueTitle = document.getElementById("blue-title");

blueTitle.style.color = "blue";



function handleClick() {
    let clickTitle = document.getElementById("click-title");

    clickTitle.style.color = "red";
}