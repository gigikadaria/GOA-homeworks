

let dayNumber = 3;

if (dayNumber === 1) {
    console.log("ორშაბათი");
} else if (dayNumber === 2) {
    console.log("სამშაბათი");
} else if (dayNumber === 3) {
    console.log("ოთხშაბათი");
} else if (dayNumber === 4) {
    console.log("ხუთშაბათი");
} else if (dayNumber === 5) {
    console.log("პარასკევი");
} else if (dayNumber === 6) {
    console.log("შაბათი");
} else if (dayNumber === 7) {
    console.log("კვირა");
} else {
    console.log("არასწორი დღე");
}




let score = 85;

if (score > 90) {
    console.log("perfect");
} else if (score > 60 && score <= 90) {
    console.log("decent");
} else {
    console.log("fired😡😡😡");
}




let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("ნაკიანი წელია");
} else {
    console.log("არ არის ნაკიანი");
}




let number = -8;

if (number === 0) {
    console.log(0);
} else if (number > 0 && number % 2 === 0) {
    console.log("დადებითი ლუწი");
} else if (number > 0 && number % 2 !== 0) {
    console.log("დადებითი კენტი");
} else {
    console.log("უარყოფითი რიცხვი");
}




let a = 10;
let b = 25;
let c = 25;

if (a === b && b === c) {
    console.log("ყველა რიცხვი ტოლია");
} else if (a >= b && a >= c) {
    console.log("ყველაზე დიდია a =", a);
} else if (b >= a && b >= c) {
    console.log("ყველაზე დიდია b =", b);
} else {
    console.log("ყველაზე დიდია c =", c);
}