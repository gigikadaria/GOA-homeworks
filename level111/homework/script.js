
// 1. დესტრუქცია (Destructuring) არის JavaScript-ის შესაძლებლობა,
// რომლის დახმარებითაც მასივიდან ან ობიექტიდან შეგვიძლია
// მნიშვნელობები პირდაპირ ცვლადებში ამოვიღოთ.

const temperatures = [22, 18, 35, 12, 28];

const [temp1, temp2, temp3, temp4, temp5] = temperatures;

const [, second, , , fifth] = temperatures;


const laptop = {
    brand: "ASUS",
    ram: 16,
    storage: 512,
    isGaming: true
};

const { brand, ram, storage, isGaming } = laptop;

const { brand: laptopBrand, storage: laptopStorage, processor } = laptop;


const myObj = {
    name: "Ivane",
    surname: "petriashvili",
    email: "petrometro@gmail.com",
    random_arr: ["hi", "hello", "sup"]
};

const [word1, word2, word3] = myObj.random_arr;

const {
    name,
    surname,
    email,
    random_arr: [first, secondWord, third]
} = myObj;


const names = ["Davit", "Giorgi", "Saba", "Deme", "Givi"];

const [name1, name2, name3, name4, name5] = names;

const [, , thirdName, fourthName] = names;


const groups = [100, 101, 102, 103, 104, 105, 106];

const [group1, group2, group3, group4, group5, group6, group7] = groups;

const [firstGroup, secondGroup, , , fifthGroup] = groups;
