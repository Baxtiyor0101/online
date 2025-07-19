// switch case
// logical operators && || ??
// loop for, while, do while

// if (3 > 2) {
//   console.log("hhh");
// }else{
//     console.log("lll");
// }

// let res = "shaftoli";
// switch (res) {
//   case ("olma", "shaftoli"):
//     console.log("10000");
//     break;
//   case "anor":
//     console.log("20000");
//     break;
//   case "nok":
//     console.log("15000");
//     break;
//   default:
//     console.log("menuda bunaqa meva yoq");
//     break;
// }

// logical operators && || ??
// && (va (*))
// || (yoki (+))
// let res = 12;
// if (res % 3 == 0 && res != 12) {
//   console.log("true");
// }
// true && false = false
// false && true = false
// true && true = true
// false && false = false

// || yoki
// let res = 12;
// if (res % 3 == 0 || res != 12) {
//   console.log("true");
// }

// true || false=true
// true || true=true
// false || true=true
// false || false=false

// if ((3 > 2 && 0 < 4) || 3 < 2) {
//   console.log("tttt");
// }

// && birinchi falsy qiymatni oladi aks holda oxirgi truthy qiymat
// console.log(undefined && null && 2);
// let res = 1;
// res == 1 && console.log("test");

// ?? nullish coalascing operator (null yoki undefined bolmagan qiymatlarni oladi)
// console.log(null ?? undefined ?? null ?? 9);

// loop for, while, do while
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 1 dan 50 gacha sonlarni ekranga chiqarib ber
// for (let i = 1; i <= 50; i = i + 2) {
//   console.log(i);
// }

// 0 dan 100gacha 2 ga va 3ga bolinadigan qiymatlarni chiqar
// for (let i = 0; i < 100; i = i + 6) {
//   //   if (i % 2 == 0 && i % 3 == 0) {
//   //     console.log(i);
//   //   }
//   console.log(i);
//   console.log("rendered");
// }

// for (let i = 0; i < 50; i++) {
//   console.log(i);
// }

// while (jarayonida)
// let res = 0;
// while (res < 10) {
//   console.log("a");
//   res++;
// }

//  while yordamida 1 dan 50 gacha toq sonlarni chiqaring

// let res = 1;
// while (res < -50) {
//   if (res % 2 != 0) {
//     console.log(res);
//   }
//   res++;
// }

// do while
// let res = 0;
// do {
//   console.log(res);
//   res++;
// } while (res < -20);

// ////////////////////////
// ////////////////////////
// ////////////////////////
// ////////////////////////
// misollar

// let num = 6; //1*2*3*4*5
// let res = 1;
// for (let i = 1; i <= num; i++) {
//   res *= i;
// }
// console.log(res);
///////////////////////////

// let count = 0;
// for (let i = 1; i < 100; i++) {
//   let res = i;
//   while (i > 0) {
//     if (i % 10 == 3) {
//       count++;
//     }
//     i = Math.floor(i / 10);
//   }
//   i = res;
// }
// console.log(count);
// "13".includes("3");

//////////////////
// let num = 12367;
// let res = 0; //// 321
// while (num > 0) {
//   let first = num % 10;
//   res = res * 10 + first;
//   num = Math.floor(num / 10);
// }
// console.log(res);
////////////

// let num = 121;
// let num2 = num;
// let res = 0; //// 321
// while (num > 0) {
//   let first = num % 10;
//   res = res * 10 + first;
//   num = Math.floor(num / 10);
// }

// if (num2 === res) {
//   console.log("palindrom");
// } else {
//   console.log("palindrom emas");
// }
//////////////////////

// let num = 1234;
// let count = 0;
// while (num > 0) {
//   count++;
//   num = Math.floor(num / 10);
// }
// console.log(count);

// let res = 12345;
// let num = Number(res.toString().split("").reverse().join(""));
// console.log(num);
