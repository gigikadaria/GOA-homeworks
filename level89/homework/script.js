const person = {
    name: "Gigi",
    age: 13,
    city: "Tbilisi",
    country: "Georgia"
};

let count = 0;

for (let key in person) {
    count++;
}

console.log(count);


const products = {
    apple: 2,
    banana: 3,
    orange: 4,
    watermelon: 10
};

for (let product in products) {
    products[product] = products[product] * 1.2;
}

console.log(products);


const user = {
    username: "admin",
    email: "admin@gmail.com",
    age: 20,
    country: "Georgia"
};

let emailExists = false;

for (let key in user) {
    if (key === "email") {
        emailExists = true;
    }
}

if (emailExists) {
    console.log("Email exists");
} else {
    console.log("Email doesn't exist");
}


const scores = {
    Nika: 85,
    Giorgi: 92,
    Ana: 97,
    Luka: 88
};

let highestScore = 0;
let highestStudent = "";

for (let student in scores) {
    if (scores[student] > highestScore) {
        highestScore = scores[student];
        highestStudent = student;
    }
}

console.log(`${highestStudent} has the highest score: ${highestScore}`);


const subjectScores = {
    math: 90,
    english: 80,
    physics: 70,
    biology: 100
};

let total = 0;
let subjects = 0;

for (let subject in subjectScores) {
    total += subjectScores[subject];
    subjects++;
}

let average = total / subjects;

console.log(average);


const userInfo = {
    name: "Nika",
    age: 17,
    isStudent: true,
    city: "Tbilisi",
    balance: 150
};

let stringCount = 0;
let numberCount = 0;
let booleanCount = 0;

for (let key in userInfo) {
    if (typeof userInfo[key] === "string") {
        stringCount++;
    } else if (typeof userInfo[key] === "number") {
        numberCount++;
    } else if (typeof userInfo[key] === "boolean") {
        booleanCount++;
    }
}

console.log("String:", stringCount);
console.log("Number:", numberCount);
console.log("Boolean:", booleanCount);