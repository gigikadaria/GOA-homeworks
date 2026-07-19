let fruits = ["ვაშლი", "ბანანი", "ატამი"];
fruits.push("ფორთოხალი");
console.log(fruits);

let cars = ["BMW", "Mercedes", "Audi", "Tesla"];
cars.pop();
console.log(cars);

let cities = ["თბილისი", "ქუთაისი", "ბათუმი", "რუსთავი"];
let result = cities.join(" / ");
console.log(result);

let colors = ["წითელი", "მწვანე", "ლურჯი", "ვარდისფერი", "სტაფილოსფერი", "ყვითელი"];
let slicedColors = colors.slice(0, 3);
console.log(slicedColors);

let inventory = ["laptop", "mouse", "keyboard", "mouse"];
let languages = ["Python", "JS", "C++", "Java"];
let combined = inventory.concat(languages);
console.log(combined);