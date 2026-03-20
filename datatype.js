//primitive data types
// let a = 10;
// let b = a;
// b=20;
// console.log(a); //a is remain same 
// console.log(b); //b is cahnged

//non-primitive datatype refrence datatypes
const user1 = {name:"Manish"};
const user2 = user1;
user2.name = "Amit";
console.log(user2)
console.log(user1)

//
console.log(1 + "2" + 3); //123
console.log(1 + 2 + "3"); //33
console.log("10" - 5); //5
console.log("10" + 5); //105

//
let person = { name: "Money" };
let members = [person];
person = null;

console.log(members);//[{ name: "Money" }]

//
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a;

console.log(a == b); //false
console.log(a === b); //false
console.log(a === c); //true


