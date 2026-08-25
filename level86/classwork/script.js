let list1 = [10, "Hello", 25, true, "JavaScript"];
list1.forEach(function(value) {
    console.log(value);
});


let list2 = [15, "Apple", 30, false, "Banana"];
list2.map(function(value, index) {
    console.log(value, index);
});


let names = ["Giorgi", "Nika", "Aleksandre", "Mariami", "Ana"];
let longNames = names.filter(function(name) {
    return name.length > 6;
});

console.log(longNames);


let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log(sum);


let fruits = ["Banana", "Apple", "Orange", "Kiwi", "Watermelon"];
let index = fruits.findIndex(function(fruit) {
    return fruit.length <= 5;
});

console.log(index);