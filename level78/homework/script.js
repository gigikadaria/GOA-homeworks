

let number = Number(prompt("შეიყვანეთ რიცხვი"));

if (number > 50) {
    console.log("big");
} else if (number > 25) {
    console.log("medium");
} else {
    console.log("small");
}




let number2 = Number(prompt("შეიყვანეთ რიცხვი"));

number2 > 50
    ? console.log("big")
    : number2 > 25
    ? console.log("medium")
    : console.log("small");




let number3 = Number(prompt("შეიყვანეთ რიცხვი"));

switch (true) {
    case number3 > 50:
        console.log("big");
        break;

    case number3 > 25:
        console.log("medium");
        break;

    default:
        console.log("small");
}




/*
if/else გამოიყენება სხვადასხვა პირობების შესამოწმებლად.

ternary operator არის if/else-ის მოკლე ვერსია და გამოიყენება
მარტივი პირობებისთვის.

switch case გამოიყენება მაშინ, როცა ერთი ცვლადის
რამდენიმე შესაძლო მნიშვნელობის შემოწმება გვინდა.
*/




let hasTicket = true;
let isVip = false;

if (hasTicket || isVip) {
    console.log("შესვლა ნებადართულია");
} else {
    console.log("შესვლა აკრძალულია");
}



let isLoggedIn = true;

isLoggedIn
    ? console.log("Welcome Back!")
    : console.log("Please Log In");


let role = "student";

switch (role) {
    case "admin":
        console.log("თქვენ გაქვთ სრული წვდომა სისტემაზე");
        break;

    case "moderator":
        console.log("თქვენ შეგიძლიათ კონტენტის მართვა");
        break;

    case "student":
        console.log("თქვენ შეგიძლიათ მხოლოდ ინფორმაციის წაკითხვა");
        break;

    default:
        console.log("უცნობი სტატუსი");
}