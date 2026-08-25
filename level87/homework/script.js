// ობიექტი არის მონაცემთა კოლექცია, რომელიც მოიცავს კუთვნილებებს (properties) და მეთოდებს (methods).

const myself = {
    name: "Gigi",
    surname: "Qadaria",
    age: 13,
    group: "Group 1"
};

console.log(myself.name);
console.log(myself.surname);
console.log(myself.age);
console.log(myself.group);


const user = {
    name: "Gigi",
    age: 13
};

user.city = "Tbilisi";
user["country"] = "Georgia";

delete user.age;

console.log(user);


const calculator = {
    add(a, b) {
        return a + b;
    }
};

console.log(calculator.add(5, 3));


const person = {
    name: "Gigi",
    age: 13,
    city: "Tbilisi"
};

console.log(`My name is ${person.name} and I live in ${person.city}`);