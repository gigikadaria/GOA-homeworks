let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("number:", randomNumber);

if (randomNumber % 2 === 0) {
    console.log("odd");
} else {
    console.log("even");
}



let age = Number(prompt("enter your age:"));

if (age < 13) {
    console.log("child");
} else if (age >= 13 && age <= 17) {
    console.log("teen");
} else {
    console.log("adult");
}


let username = prompt("enter username:");
let password = prompt("enter password:");

if (username === "admin" && password === "1234") {
    console.log("გილოცავთ თქვენ მოიგეთ 1000 robux");
} else {
    console.log("თავიდან სცადე");
}