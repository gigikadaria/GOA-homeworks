//განსხვავება ჩვეულებრივ ფუნქციასა და arrow function-ს შორის

// ჩვეულებრივი ფუნქცია იქმნება function keyword-ის გამოყენებით.
// მისი გამოძახება შესაძლებელია ფუნქციის შექმნამდე, რადგან ხდება hoisting.
// ჩვეულებრივ ფუნქციას აქვს საკუთარი this მნიშვნელობა.

function greet() {
  return "Hello";
}

// Arrow function იწერება უფრო მოკლე სინტაქსით.
// იგი ინახება ცვლადში და შექმნამდე მისი გამოძახება არ შეიძლება.
// Arrow function-ს საკუთარი this არ აქვს — იგი this-ს იღებს გარე scope-იდან.

const arrowGreet = () => {
  return "Hello";
};


//multiplyByThree arrow function

const multiplyByThree = (number) => {
  return number * 3;
};

console.log(multiplyByThree(5)); // 15


//isAdult ფუნქციის arrow function-ად გადაკეთება

const isAdult = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(isAdult(20)); // true
console.log(isAdult(15)); // false

// იგივე ფუნქციის უფრო მოკლე ვერსია:

const isAdultShort = (age) => age >= 18;

console.log(isAdultShort(18)); // true


//Helper ფუნქციის მაგალითი

// პირველი ფუნქცია აბრუნებს რიცხვს.
function getNumber() {
  return 20;
}

// მეორე ფუნქცია არის helper ფუნქცია.
// იგი იღებს პირველი ფუნქციის შედეგს და უმატებს 10-ს.
function addTen(number) {
  return number + 10;
}

const firstResult = getNumber();
const finalResult = addTen(firstResult);

console.log(finalResult); // 30

// შეგვიძლია პირდაპირაც გადავცეთ:
console.log(addTen(getNumber())); // 30


// სამი სხვადასხვა ფუნქცია, რომლებიც აბრუნებენ
// ტექსტს: "JavaScript is fun"


// პირველი — function keyword-ით შექმნილი ფუნქცია

function getTextOne() {
  return "JavaScript is fun";
}


// მეორე — ცვლადში შენახული ჩვეულებრივი ფუნქცია
// ამას function expression ეწოდება.

const getTextTwo = function () {
  return "JavaScript is fun";
};


// მესამე — arrow function

const getTextThree = () => {
  return "JavaScript is fun";
};

console.log(getTextOne());
console.log(getTextTwo());
console.log(getTextThree());


//რა არის scope?

// Scope განსაზღვრავს, კოდის რომელ ნაწილშია ცვლადი,
// ფუნქცია ან სხვა მნიშვნელობა ხელმისაწვდომი.

// JavaScript-ში ძირითადად გვაქვს:
//
// 1. Global scope
// 2. Function scope
// 3. Block scope


// Global scope:
// გლობალურად შექმნილი ცვლადი ხელმისაწვდომია კოდის ბევრ ნაწილში.

const globalMessage = "მე ვარ global scope-ში";

function showGlobalMessage() {
  console.log(globalMessage);
}

showGlobalMessage();


// Function scope:
// ფუნქციის შიგნით შექმნილი ცვლადი მხოლოდ იმ ფუნქციის შიგნითაა ხელმისაწვდომი.

function functionScopeExample() {
  const secretNumber = 50;

  console.log(secretNumber); // მუშაობს
}

functionScopeExample();

// console.log(secretNumber);
// შეცდომა იქნება, რადგან secretNumber ფუნქციის გარეთ არ არსებობს.


// Block scope:
// let და const-ით ბლოკის შიგნით შექმნილი ცვლადები
// მხოლოდ იმ ბლოკის შიგნითაა ხელმისაწვდომი.

if (true) {
  const blockMessage = "მე ვარ block scope-ში";
  let blockNumber = 100;

  console.log(blockMessage);
  console.log(blockNumber);
}

// console.log(blockMessage);
// შეცდომა იქნება, რადგან blockMessage ბლოკის გარეთ მიუწვდომელია.


// განსხვავება global და block scope-ს შორის

// Global scope-ში შექმნილი ცვლადი ხელმისაწვდომია
// კოდის თითქმის ყველა ნაწილში.

const websiteName = "My Website";

function printWebsiteName() {
  console.log(websiteName);
}

printWebsiteName();


// Block scope-ში შექმნილი let ან const ცვლადი
// მხოლოდ კონკრეტულ {} ბლოკშია ხელმისაწვდომი.

if (true) {
  const userStatus = "Online";
  console.log(userStatus); // მუშაობს
}

// console.log(userStatus);
// შეცდომა იქნება, რადგან userStatus ბლოკის გარეთ არ არსებობს.


// Global scope:
// - ფართოდ ხელმისაწვდომია;
// - შეიძლება ბევრმა ფუნქციამ გამოიყენოს;
// - ზედმეტმა გამოყენებამ შეიძლება კოდი არეულად აქციოს.
//
// Block scope:
// - მხოლოდ კონკრეტულ ბლოკში მუშაობს;
// - ამცირებს შემთხვევითი შეცვლის რისკს;
// - კოდს უფრო უსაფრთხოს და გასაგებს ხდის.


//რა არის window ობიექტი?

// window არის ბრაუზერის მთავარი გლობალური ობიექტი.
//
// ბრაუზერში global scope-ში შექმნილი ზოგიერთი მნიშვნელობა
// window ობიექტთან არის დაკავშირებული.
//
// window-ის საშუალებით შეგვიძლია:
//
// - alert ფანჯრის ჩვენება;
// - prompt-ით მონაცემის მიღება;
// - confirm ფანჯრის ჩვენება;
// - გვერდის მისამართის ნახვა;
// - დროის ფუნქციების გამოყენება;
// - ბრაუზერის ზომების გაგება.


// შეტყობინების ჩვენება:

// window.alert("Hello!");


// მომხმარებლისგან მონაცემის მიღება:

// const userName = window.prompt("შეიყვანე სახელი:");


// თანხმობის მიღება:

// const answer = window.confirm("გსურს გაგრძელება?");


// ბრაუზერის ფანჯრის ზომები:

console.log(window.innerWidth);
console.log(window.innerHeight);


// გვერდის მისამართი:

console.log(window.location.href);


// setTimeout-იც window ობიექტის ნაწილია:

window.setTimeout(() => {
  console.log("ორი წამი გავიდა");
}, 2000);

// ჩვეულებრივ window-ის დაწერა სავალდებულო არ არის:

setTimeout(() => {
  console.log("ესეც მუშაობს");
}, 1000);


//რა არის scope pollution?

// Scope pollution ნიშნავს scope-ში ზედმეტად ბევრი
// ცვლადის ან ფუნქციის შექმნას.
//
// ეს განსაკუთრებით პრობლემურია global scope-ში,
// რადგან სხვადასხვა ცვლადს შეიძლება ერთნაირი სახელი ჰქონდეს,
// ან კოდის ერთმა ნაწილმა სხვა ნაწილის მნიშვნელობა შეცვალოს.


// ცუდი მაგალითი:

let value = 10;
let result = 20;
let data = 30;
let number = 40;

// ყველა ცვლადი global scope-შია.
// დიდ პროექტში რთული იქნება მათი მართვა.


// Scope pollution-ის შესაძლო პრობლემა:

let score = 100;

function changeScore() {
  score = 0;
}

changeScore();

console.log(score); // 0

// ფუნქციამ გლობალური ცვლადი შეცვალა,
// რაც შეიძლება არასასურველი შედეგი იყოს.


// უკეთესი მაგალითი:

function calculateScore() {
  const score = 100;
  return score;
}

console.log(calculateScore()); // 100

// score ფუნქციის გარეთ არ არის ხელმისაწვდომი,
// ამიტომ სხვა კოდი მას შემთხვევით ვერ შეცვლის.


// Scope pollution-ის თავიდან ასაცილებლად:
//
// - ნაკლებად გამოვიყენოთ global ცვლადები;
// - გამოვიყენოთ let და const;
// - ცვლადები შევქმნათ იმ scope-ში, სადაც საჭიროა;
// - კოდი დავყოთ პატარა ფუნქციებად;
// - ცვლადებს მივცეთ გასაგები სახელები.


// Scope-ების სწორი გამოყენების მაგალითები


// მაგალითი 1 — ცვლადი შექმნილია საჭირო ფუნქციის შიგნით

function calculateTotal(price, quantity) {
  const total = price * quantity;

  return total;
}

console.log(calculateTotal(5, 4)); // 20

// total მხოლოდ calculateTotal ფუნქციას ეკუთვნის.


// მაგალითი 2 — block scope-ის გამოყენება

const temperature = 30;

if (temperature > 25) {
  const message = "დღეს ცხელა";
  console.log(message);
}

// message აღარ გვჭირდება if ბლოკის გარეთ,
// ამიტომ მისი ბლოკში შექმნა სწორი პრაქტიკაა.


// მაგალითი 3 — ერთი და იმავე სახელის გამოყენება სხვადასხვა scope-ში

const name = "Global Name";

function showName() {
  const name = "Local Name";

  console.log(name);
}

showName(); // Local Name
console.log(name); // Global Name

// ეს ორი name სხვადასხვა scope-შია,
// ამიტომ ისინი ერთმანეთს არ ცვლიან.


// მაგალითი 4 — nested scope

function outerFunction() {
  const outerMessage = "Outer scope";

  function innerFunction() {
    const innerMessage = "Inner scope";

    console.log(outerMessage);
    console.log(innerMessage);
  }

  innerFunction();

  // console.log(innerMessage);
  // შეცდომა იქნება, რადგან outerFunction-ს
  // innerFunction-ის შიდა ცვლადზე წვდომა არ აქვს.
}

outerFunction();


// მაგალითი 5 — გლობალური ცვლადის ნაცვლად პარამეტრის გამოყენება

// ცუდი პრაქტიკა:

let globalPrice = 50;

function badDiscount() {
  return globalPrice - 10;
}

console.log(badDiscount());


// კარგი პრაქტიკა:

function calculateDiscount(price) {
  return price - 10;
}

console.log(calculateDiscount(50));

// პარამეტრის გამოყენებით ფუნქცია აღარ არის
// დამოკიდებული გლობალურ ცვლადზე.


// მაგალითი 6 — helper ფუნქციების სწორი scope

function calculateFinalPrice(price) {
  // helper ფუნქცია მხოლოდ calculateFinalPrice-ის შიგნით გვჭირდება.
  function addTax(number) {
    return number * 1.18;
  }

  return addTax(price);
}

console.log(calculateFinalPrice(100)); // 118

// addTax გარედან მიუწვდომელია.
// ეს ამცირებს global scope-ის დაბინძურებას.


// მაგალითი 7 — for ციკლის block scope

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// console.log(i);
// შეცდომა იქნება, რადგან let-ით შექმნილი i
// მხოლოდ for ციკლის ბლოკში არსებობს.