const rectangle = {
    name: "Rectangle",
    color: "Blue",
    unit: "cm",

    area(width, height) {
        return width * height;
    },

    perimeter(width, height) {
        return 2 * (width + height);
    }
};

console.log(rectangle.area(5, 10));
console.log(rectangle.perimeter(5, 10));


const movie = {
    title: "The Avengers",
    genre: "Action",
    director: "Joss Whedon",
    year: 2012,

    checkAge(age) {
        if (age >= 18) {
            return "Allowed";
        } else {
            return "Not allowed";
        }
    },

    isNew(currentYear) {
        return currentYear - this.year <= 5;
    }
};

console.log(movie.checkAge(20));
console.log(movie.isNew(2017));


const passwordChecker = {
    name: "Password Checker",
    version: "1.0",

    checkLength(password) {
        return password.length >= 8;
    },

    hasNumber(password) {
        return /\d/.test(password);
    },

    isStrong(password) {
        if (this.checkLength(password) && this.hasNumber(password)) {
            return "Strong";
        } else {
            return "Weak";
        }
    }
};

console.log(passwordChecker.checkLength("password123"));
console.log(passwordChecker.hasNumber("password123"));
console.log(passwordChecker.isStrong("password123"));


const circle = {
    name: "Circle",
    unit: "cm",

    area(radius) {
        return Math.PI * radius ** 2;
    },

    circumference(radius) {
        return 2 * Math.PI * radius;
    },

    diameter(radius) {
        return 2 * radius;
    }
};

console.log(circle.area(5));
console.log(circle.circumference(5));
console.log(circle.diameter(5));


const gradeCalculator = {
    name: "Grade Calculator",
    subject: "Math",

    average(a, b, c) {
        return (a + b + c) / 3;
    },

    getGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    },

    isPassed(score) {
        return score >= 60;
    }
};

console.log(gradeCalculator.average(90, 80, 70));
console.log(gradeCalculator.getGrade(85));
console.log(gradeCalculator.isPassed(85));