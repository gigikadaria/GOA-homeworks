 // this keyword მიუთითებს იმ ობიექტზე, რომლის კონტექსტშიც მეთოდი გამოიძახება.
 // მას ვიყენებთ ობიექტის საკუთარ property-ებზე და მეთოდებზე წვდომის მისაღებად.

 // Getter არის სპეციალური მეთოდი, რომელიც property-ის მნიშვნელობას კითხულობს.
 // Setter არის სპეციალური მეთოდი, რომელიც property-ის მნიშვნელობას ცვლის.
 // მათ ვიყენებთ მონაცემების კონტროლისთვის და property-ებზე უსაფრთხო წვდომისთვის.

 // Private მეთოდები არის მეთოდები, რომლებზეც ობიექტის გარედან პირდაპირი წვდომა არ გვაქვს.
 // JavaScript-ში private მეთოდის/მონაცემის აღსანიშნავად გამოიყენება #.

const person = {
    name: "Gigi",
    age: 13,

    get getName() {
        return this.name;
    },

    get getAge() {
        return this.age;
    },

    set setAge(newAge) {
        this.age = newAge;
    },

    printInfo() {
        console.log(`Name: ${this.getName}`);
        console.log(`Age: ${this.getAge}`);
    }
};

person.printInfo();

person.setAge = 17;

person.printInfo();