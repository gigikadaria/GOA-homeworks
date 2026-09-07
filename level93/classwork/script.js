function Flower(flower_name, flower_color, flower_quantity) {
    return {
        flower_name,
        flower_color,
        flower_quantity,

        all_info() {
            console.log(`სახელი: ${this.flower_name}, ფერი: ${this.flower_color}, რაოდენობა: ${this.flower_quantity}`);
        }
    };
}

let flower1 = Flower("Rose", "Red", 10);

flower1.all_info();

let { flower_name, flower_color, flower_quantity } = flower1;

console.log(flower_name);
console.log(flower_color);
console.log(flower_quantity);

let date = new Date();

let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

let hours = date.getHours();
let minutes = date.getMinutes();

console.log(`${month}/${day}/${year} | ${hours}:${minutes}`);