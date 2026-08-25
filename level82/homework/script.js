
let fruits = ["apple", "banana", "orange"];

fruits.push("mango");

console.log(fruits);



let numbers = [10, 20, 30, 40];

let removedNumber = numbers.pop();

console.log(removedNumber);
console.log(numbers);



let words = ["hello", "my", "name", "is", "Gigi"];

let result = words.join("-");

console.log(result);



let items = ["a", "b", "c", "d", "e", "f"];

let slicedItems = items.slice(2, 5);

console.log(slicedItems);



let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"];

let removedCity = cities.shift();

console.log(removedCity);
console.log(cities);



let nums = [20, 30, 40];

nums.unshift(10);

console.log(nums);
console.log(nums.length);



let animals = ["dog", "cat", "lion"];
let birds = ["eagle", "parrot", "owl"];

let combined = animals.concat(birds);

console.log(combined);



let elements = ["a", "b", "c", "d", "e", "f", "g"];

let removedElements = elements.splice(3, 2);

console.log(removedElements);
console.log(elements);