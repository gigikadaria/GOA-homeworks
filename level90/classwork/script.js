const person = {
    name: "Gigi",
    age: 15,
    city: "Tbilisi"
};

person.eyeColor = "brown"; 
delete person.city;        

console.log(person);



const animal = {
    name: "Rex",
    type: "Dog",
    age: 3
};

delete animal.age;
animal.age = 3;

console.log(animal);



const motorcycle = {
    brand: "Yamaha",
    model: "R1",
    year: 2020
};

motorcycle.year = 2024;
delete motorcycle.model;   
motorcycle.color = "Black"; 

console.log(motorcycle);