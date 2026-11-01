
const names = ['Davit', 'Zuka', 'Gio', 'Lado', 'Guka'];
const nums = [1, 98, 102, 34, 87];

const mixed_arr = [...names, ...nums];

console.log(mixed_arr);



const cars = ['BMW M5 F90', 'Mersedes Benz G65 AMG', 'Mazda RX7', 'Toyota Prius'];

const [car1, car2, ...other_cars] = cars;

console.log(other_cars);



const car = {
    brand: 'BMW',
    model: 'M5'
};

try {
    car = {
        brand: 'Mercedes',
        model: 'G63'
    };
} catch (error) {
    console.log('Error:', error.message);
}