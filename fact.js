
// let n = 5;
// let ans = 1;
// function fact(){
//     for(let i = 1;  i <= n; i++){
//             ans = ans * i;
//     }
// }

// fact();

// console.log(ans);


// class person{
//         constructor(name, age){
//             this.name = name;
//             this.age = age;
//         }
// }

// person.prototype.stu = class student{
//     constructor(name, age, sec){
//         person.call(this, name, age)
//         this.sec = sec;
//     }

//     details(){
//         console.log(`${name} is from sec ${sec} of age ${age}`);
//     }

// }

// person.prototype.emp = class employee{
//     constructor(name, age, salary){
//         person.call(this, name, age);
//         this.salary = salary;
//     }

//     package(){
//          console.log(`${name} of age ${age} geting ${this.salary}`);
//     }
// }

// console.log("Person class : ", person);
// console.log("Student class: ",person.prototype.stu);
// console.log("employeeclass: ",person.prototype.emp);


// function changeToUpperCase(text){
//     let arr = text.trim().split(' ');
//     let ans = ''
//     for(let i = 0; i < arr.length; i++){
//         let ch = arr[i][0].toUpperCase();
//         ans += ' ' +ch + arr[i].slice(1);
//     }

//    console.log(ans);
// }

// changeToUpperCase("javascript is fun");

let arr = [1,2,3,4,5];

let arr1 = new Array(6).fill(2);
let str = 'hello world';
let arr2 = Array.from(str);

let arr3 = arr.concat(arr1, arr2);

// console.log(arr3);

let arr4 = arr.every((x) => x%2 == 0);
let arr5 = arr1.every((x) => x%2 == 0);
// console.log(arr4);
// console.log(arr5);

let arr6 = arr.filter((x) => 
    x * 2 >= 6
)

// console.log(arr6);

const ans = arr.reduce((acc, cur) => {
    return acc + cur;
})

console.log(ans);