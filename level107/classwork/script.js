// localStorage.setItem('name', 'Gigi')
// localStorage.setItem('surname', 'Kadaria')
// localStorage.setItem('age', '14')
// localStorage.setItem('group', '84')

// const name = localStorage.getItem("name")
// const surname = localStorage.getItem("surname")
// const age = localStorage.getItem("age")
// const group = localStorage.getItem("group")

// console.log("Name:", name)
// console.log("Surname:", surname)
// console.log("Age:", age)
// console.log("Group:", group)

// localStorage.removeItem("group")

localStorage.setItem("Myuser", JSON.stringify({
    Name: "Gigi",
    Surname: "Kadaria",
    Age: 21,
    group: "84"
}));

const parsedUser = JSON.parse(localStorage.getItem("MyUser"))

console.log("Name:", parsedUser.Name)
console.log("Surname:", parsedUser.Surname)
console.log("Age:", parsedUser.Age)
console.log("Group:", parsedUser.group)

localStorage.removeItem("MyUser")