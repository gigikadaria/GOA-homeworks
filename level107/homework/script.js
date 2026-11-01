
// 1. localStorage არის ბრაუზერის მეხსიერება,
// სადაც შეგვიძლია ინფორმაციის შენახვა.
// მონაცემები რჩება ბრაუზერის დახურვის შემდეგაც.


// 2. localStorage-ის მეთოდები:

// setItem() - ინახავს მონაცემს.
// getItem() - იღებს შენახულ მონაცემს.
// removeItem() - შლის კონკრეტულ მონაცემს.
// clear() - შლის მთლიან localStorage-ს.
// key() - აბრუნებს გასაღების სახელს მითითებული ინდექსით.


// 3. ვინახავთ საყვარელ ფერს localStorage-ში.

localStorage.setItem("color", "blue");


// 4. მოგვაქვს შენახული ფერი და გამოგვაქვს Console-ში.

console.log(localStorage.getItem("color"));


// 5. ვშლით ფერის მონაცემს localStorage-დან.

localStorage.removeItem("color");


// 6. ვინახავთ სახელს და ასაკს.

localStorage.setItem("name", "Gigi");
localStorage.setItem("age", "18");


// ვშლით მთლიან localStorage-ს.

localStorage.clear();
