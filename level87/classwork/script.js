let person = {
    name: "Gigi",
    age: 13,
    height: 165
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.height);

person.age = 17;

console.log(person);
delete person.height;
console.log(person);


const user = {};

user.fullname = "Gigi qadaria";
user.password = "hello123";
user["favorite color"] = "Blue";

user.printInfo = function() {
    console.log(
        "Fullname: " + user.fullname +
        ", Password: " + user.password +
        ", Favorite Color: " + user["favorite color"]
    );
};

user.printInfo();