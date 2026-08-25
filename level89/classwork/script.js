const student = {
    name: "Nika",
    age: 15,
    grade: 10,
    city: "Tbilisi"
};

for (let key in student) {
    console.log(key);
}

const car = {
    brand: "BMW",
    model: "M4",
    year: 2022,
    color: "Black"
};

for (let key in car) {
    console.log(key + ": " + car[key]);
}

const person = {
    name: "Gio",
    age: 17,
    height: 180,
    city: "Tbilisi",
    weight: 70
};

for (let key in person) {
    if (typeof person[key] === "number") {
        console.log(person[key]);
    }
}

const grades = {
    math: 95,
    english: 78,
    physics: 88,
    history: 65,
    biology: 92
};

for (let key in grades) {
    if (grades[key] >= 80) {
        console.log(key + ": Passed");
    } else {
        console.log(key + ": Failed");
    }
}