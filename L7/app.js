// Object Constructor
// object copying
// advanced functions

// let user = {
//   names: "Jasur",
//   age: 12,
//   email: "example",
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.fromEntries(Object.entries(user)));
// Object.freeze(user);
// user.age = 34;
// console.log(user);
// console.log(Object.isFrozen(user));

// Object.seal(user);
// user.age = 24;
// user.test = "test";
// console.log(user);
// console.log(Object.isSealed(user));

// object copying
// let num = 32;
// let num2 = num;
// num2=num+34;
// console.log(num == num2);
// shallow copy
// let user = {
//   names: "Jasur",
//   age: 12,
//   email: "example",
// };

// let obj = user;
// obj.address = "tashkent";
// console.log(obj, user);

// deep copy
// let user = {
//   names: "Jasur",
//   age: 12,
//   email: "example",
// };
// let obj = JSON.stringify(user);
// let objLast = JSON.parse(obj);
// // let res = String(user);
// console.log(objLast==user);

// let user = {
//   age: 34,
//   email: "sds",

// };
// let obj = { ...user };
// user.address.city = "Sam";
// console.log(obj.address.city);

// advanced functions
// IIFE =>Immediatly invoked function execution

// (() => {
//   console.log("dd");
// })();

// factory function = > object yasab beradigan function
// function factory(name, age, email) {
//   return {
//     name: name,
//     age: age,
//     email: email,
//   };
// }

// let res = factory("Jamol", 34, "example");
// console.log(res);

// callback function => functionda argument ornida kelgan function

// function test(a) {
//   a();
// }

// test(() => {
//   console.log("test is callback function");
// });

// let arr = [3453, 345, 34];
// arr.map((val, inx) => {});

// currying function

// function test(a) {
//   a = a + 8;
//   return function (b) {
//     return a + b;
//   };
// }

// function test2(a, b) {
//   return a + b;
// }
// console.log(test2(12, 10));
// console.log(test(12)(10));
