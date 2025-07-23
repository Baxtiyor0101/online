// Array Methods
// destructuring
// spread and rest operator
// Array  High order metheds

// let arr = [1, 2, 4, 3, 4, 5, 6];
// console.log(arr.toString());
// arr.push(33);
// arr.unshift(33,44);
// arr.pop();
// arr.shift();
// arr.reverse();
// arr.splice(2, 1);
// arr.splice(2, 2, 12, 23);
// let res = arr.slice(1, 4);
// console.log(arr.includes(3));
// console.log(arr.indexOf(3));
// console.log(arr.lastIndexOf(4));
// console.log(arr.concat([33, 44]));

// /////////////////////
// /////////////////////
// /////////////////////
// /////////////////////desrtucturing => object and array

// let arr = [3, 5, 4, 6, [4, [78]]];
// let res = arr[1];
// let res1 = arr[0];
// let [res1, res2, res3, res4, [res5, [res6]]] = arr;
// console.log(arr[4][1][0]);
// console.log(res6);

// let obj = {
//   name: "test",
//   age: 23,
//   email: "test2email",
//   address: {
//     name: "test55",
//     city: "tashkent",
//     street: "nakkoshlik",
//   },
// };
// // console.log(obj.email);
// let {
//   name,
//   age,
//   email,
//   address: { name: nameOfAddress, city, street },
// } = obj;
// console.log(nameOfAddress);

// ///////////////////////////// (...)

// function test(a, ...rest) {
//   console.log(rest);
// }
// test(1, 2, 3, 45);
// let res = [2, 4, 5, 6, 4, 3, 3];
// console.log(Math.max(...res));
// ...res => 2, 4, 5, 6, 4, 3, 3

// let obj = {
//   age: 43,
//   email: "erer",
// };
// let res = { ...obj, age: 55 };
// console.log(res);

////////////////
////////////////
// Array  High order metheds
// high order function => parametrda function qabul qiladi yoki ozi boshwa bir function qaytaradi
// function test(a) {
//   console.log(a);
// }
// test(() => {});

// function test() {
//   return () => {};
// }
// console.log(test());

// Array  High order metheds
// let res = [12, 12, 34, 43, 45, 6, 7];
// res.forEach((val, inx, arr) => {
//   //   console.log(val, inx);
//   console.log(arr);
// });

// let res2 = res.map((val, inx, arr) => val * 2);
// console.log(res2);

// let res2 = res.filter((val) => val % 2 == 0);
// console.log(res2);

// let res2 = res.find((val) => val % 3 == 0);
// console.log(res2);

// let res2 = res.every((val) => val > 0);
// console.log(res2);

// let res = [43, 45, 7,8];
// let res2 = res.some((val) => val % 2 == 0);
// console.log(res2);

// let res = [43, 45, 7, 8];
// let res2 = res.reduce((sum, val) => (sum += val));
// console.log(res2);

// let res = [11, 51, 4, 3, 8, 3];
// let sorted = res.sort((a, b) => b-a);
// console.log(sorted);

// 9
// function sumAll(...rest) {
//   let res = rest.reduce((acc, val, inx) => (acc += val));
//   return res;
// }
// console.log(sumAll(3, 3, 5, 6, 7));
// // sumAll(1, 2, 3, 4) => 10

// 15
// let arr = [{ role: "user" }, { role: "admins" }, { role: "superadmin" }];
// let res = arr.some((val) => val.role === "admin");
// console.log(res);

// 17

// let arr = [0, "hello", null, "", 5]; // ["hello",5]
// let res = arr.filter((val) => Boolean(val) !== false);
// console.log(res);

// function test() {}
// test.current = "dfsdsdf";
// console.log(test.current);

// let res = {
//   age: 23,
//   email: "sddcsd",
//   sayHi: () => {
//     console.log("hello ");
//   },
// };
// Math 