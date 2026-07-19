function greet(name = "stranger") {
    console.log(`Hello ${name}`);
}

greet("Davit");
greet();


function double(num) {
    return num * num;
}

console.log(double(5));



function checkOdd(num) {
    if (num % 2 === 0) {
        return "ლუწი";
    } else {
        return "კენტი";
    }
}

console.log(checkOdd(8));
console.log(checkOdd(7)); 



function BMI(height, weight) {
    return weight / (height * height);
}

console.log(BMI(1.75, 70));