
// Rest და Spread ოპერატორები ორივე იყენებს სამ წერტილს (...).
// Spread შლის მასივს ან ობიექტს ცალკეულ მნიშვნელობებად.
// Rest კი აერთიანებს რამდენიმე მნიშვნელობას ერთ მასივში ან ობიექტში.
// განსხვავება: Spread შლის, Rest აგროვებს მნიშვნელობებს.

const temperatures = [22, 18, 35, 12, 28];

const [temp1, temp2, temp3, temp4, temp5] = temperatures;


const laptop = {
    brand: "ASUS",
    ram: 16,
    storage: 512,
    isGaming: true
};

const { brand, ram, storage, isGaming } = laptop;

const { brand: laptopBrand, storage: laptopStorage, processor } = laptop;


const racers = ["Lewis", "Max", "Lando", "Charles", "George", "Oscar"];

const [gold, silver, ...other_racers] = racers;


const names = [true, false, true, true];
const nums = [43.2, 98, 43, 313, 11];

const mixed_arr = [...names, ...nums];


try {
    let num = 10;
    let result = num.toUpperCase();
    console.log(result);
} catch (error) {
    console.log("Something went wrong!");
} finally {
    console.log("Code finished!");
}
