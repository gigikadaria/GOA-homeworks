const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number);
});


const names = ["John", "Sarah", "Mike"];

names.forEach(name => {
    console.log(`Hello, ${name}`);
});


const nums = [1, 2, 3, 4, 5];
let sum = 0;

nums.forEach(number => {
    sum += number;
});

console.log(sum);


const words = ["javascript", "is", "awesome"];

words.forEach(word => {
    console.log(`${word} - ${word.length}`);
});


const students = ["John", "Sarah", "Mike"];

students.forEach((student, index) => {
    console.log(`${index} - ${student}`);
});


const numbers2 = [1, 2, 3, 4, 5];

const doubled = numbers2.map(number => number * 2);

console.log(doubled);


const temperatures = [0, 10, 20, 30, 40];

const fahrenheit = temperatures.map(celsius => celsius * 9 / 5 + 32);

console.log(fahrenheit);


const names2 = ["John", "Sarah", "Mike"];

const upperCaseNames = names2.map(name => name.toUpperCase());

console.log(upperCaseNames);


const numbers3 = [1, 2, 3, 4, 5];

const numberTexts = numbers3.map(number => `Number: ${number}`);

console.log(numberTexts);