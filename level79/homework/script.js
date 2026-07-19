// ფუნქცია არის კოდის ნაწილი, რომელიც ასრულებს კონკრეტულ დავალებას.
// ფუნქციებს ვიყენებთ იმისთვის, რომ ერთი და იგივე კოდი გამეორებით არ ვწეროთ.

// ფუნქციის შექმნის ეტაპები:
// 1. ვწერთ function-ს.
// 2. ვწერთ ფუნქციის სახელს.
// 3. ფრჩხილებში ვწერთ პარამეტრებს.
// 4. კლაკნილ ფრჩხილებში ვწერთ შესასრულებელ კოდს.
// 5. ფუნქციას ვიძახებთ მისი სახელით.

// პარამეტრი არის ცვლადი, რომელსაც ფუნქციის შექმნისას ვწერთ.
// არგუმენტი არის რეალური მნიშვნელობა, რომელსაც ფუნქციის გამოძახებისას გადავცემთ.

function example(parameter) {
    console.log(parameter);
}

// "Hello" არის არგუმენტი.
example("Hello");



function addNumbers(number1, number2) {
    return number1 + number2;
}

console.log(addNumbers(5, 10));



function checkEven(number) {
    if (number % 2 === 0) {
        console.log("რიცხვი ლუწია");
    } else {
        console.log("რიცხვი კენტია");
    }
}

checkEven(8);



function squareNumber(number) {
    return number ** 2;
}

console.log(squareNumber(6));




function makeUpperCase(text) {
    return text.toUpperCase();
}

console.log(makeUpperCase("hello world"));



function fullName(name, surname) {
    console.log("ჩემი სახელია " + name + " და ჩემი გვარია " + surname + ".");
}

fullName("გიგი", "ქადარია");