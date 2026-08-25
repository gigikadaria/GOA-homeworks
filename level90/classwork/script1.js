const calculator = {
    name: "Calculator",
    type: "Basic",

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));


const person = {
    name: "Gigi",
    surname: "Qadaria",
    age: 15,
    height: 170,
    weight: 60,

    greet(name) {
        return `Hello, ${name}!`;
    }
};

console.log(person.greet("Nika"));


const math = {
    name: "Math",
    version: "1.0",

    square(number) {
        return number * number;
    },

    cube(number) {
        return number * number * number;
    },

    isEven(number) {
        return number % 2 === 0;
    }
};

console.log(math.square(5));
console.log(math.cube(3));
console.log(math.isEven(10));
console.log(math.isEven(7));


const stringHelper = {
    name: "String Helper",
    language: "English",

    upper(text) {
        return text.toUpperCase();
    },

    lower(text) {
        return text.toLowerCase();
    },

    length(text) {
        return text.length;
    }
};

console.log(stringHelper.upper("hello world"));
console.log(stringHelper.lower("HELLO WORLD"));
console.log(stringHelper.length("Hello"));


const temperature = {
    name: "Temperature Converter",
    unit: "Celsius",

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
};

console.log(temperature.toCelsius(100));
console.log(temperature.toFahrenheit(100));


const student = {
    name: "Gigi",
    surname: "Qadaria",
    school: "School",
    grade: 10,

    checkGrade(score) {
        if (score >= 90) {
            return "Excellent";
        } else {
            return "Good";
        }
    },

    isPassed(score) {
        if (score >= 51) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(student.checkGrade(95));
console.log(student.checkGrade(70));
console.log(student.isPassed(70));
console.log(student.isPassed(40));