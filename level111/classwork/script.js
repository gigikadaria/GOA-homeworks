const salary = [1500, 2000, 9800, 12300, 5000];

const [sal_1, sal_2, sal_3, sal_4, sal_5] = salary;

console.log(sal_1);
console.log(sal_2);
console.log(sal_3);
console.log(sal_4);
console.log(sal_5);


const group_info = {
  name: "Group 84",
  studentsCount: 18,
  isActive: true,
  learning: "JS Intermidiate",
  speed: 2,
  groups: {
    no_1: 87,
    no_2: 102,
    no_3: 98
  }
};

const { name, studentsCount, isActive, learning, speed, groups } = group_info;

console.log(name);
console.log(studentsCount);
console.log(isActive);
console.log(learning);
console.log(speed);
console.log(groups);


const { name: name2, isActive: isActive2, speed: speed2 } = group_info;

console.log(name2);
console.log(isActive2);
console.log(speed2);


const { groups: { no_1, no_2, no_3 } } = group_info;

console.log(no_1);
console.log(no_2);
console.log(no_3);