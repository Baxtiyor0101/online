// type conversions in all cases
// Truthy and folsy values
// math methods
// ternary operator ? :

// type conversions in all cases (bir tipdan ikkinchi tipga otish)
// number => Number()
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(""));
// console.log(Number("23"));
// console.log(Number(undefined)); // NaN => not a number
// console.log(Number(null));
// console.log(Number({}));
// console.log(Number([]));
// console.log(Number(12686768797697987698769n));
// let res = Symbol("test");
// console.log(res);
// console.log(Number("erwr"));

// string => toString()
// let res = "{}";
// console.log(typeof String(res));
// console.log(typeof res.toString());

//  boolean => Boolean()

// falsy values
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0n));
// console.log(Boolean(NaN));
// if ("2" === 2) {
// }

// Math Methods
// console.log(Math.pow(4, 1 / 2));
// console.log(Math.sqrt(4));
// console.log(Math.cbrt(8));
// console.log(Math.abs(12));
// console.log(Math.cos(1));

// let num = -12.904;
// console.log(Math.floor(num));
// console.log(Math.ceil(23.4));
// console.log(Math.round(12.3));
// console.log(Math.max(2, 3, 6, 4, 2, 4, 6, 8, 4));
// console.log(Math.min(3, 4, 5, 7, 4, 2));
// console.log(Math.floor(Math.random()*100)); // 0 - 1  orasidagi ixtiyoriy son
// 50 100

// //////////////////////
// //////////////////////
// //////////////////////
// ternary operator ? : => if else

// let num = 13;
// let res = num % 2 == 0 ? "juft" : "toq";
// console.log(res);
// let res =
//   num % 3 == 2
//     ? "test"
//     : num % 3 == 0
//     ? "best"
//     : num % 5 == 0
//     ? "bu 5ga bolinadi"
//     : null;
// console.log(res);