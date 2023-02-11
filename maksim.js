const fs = require("fs");

const stroka = fs.readFileSync(`${__dirname}/stroka1.txt`, "utf-8");

const strokaIzm = stroka.split();
// console.log(strokaIzm);
// const strokaIzm = stroka.split().join(",");
// const rrr = strokaIzm.split(",");
// let er = strokaIzm.map((el) => el.split());
// console.log(rrr);

// let io = [];
// function zal(arr) {
//   let qwe = [];
//   for (let i = 0; i < arr.length; i += 9) {
//     let qwe1 = [];
//     qwe1.push(arr.slice(i, i + 9)); // создние млого массива
//     qwe.push(qwe1); // создание большого маассива с вложенными массивами
//   }
//   let joi = qwe.map((el) => el.join(""));
//   joi.map((el, i) => el.split());
//   return joi;
// }
// console.log(zal(stroka));

function zal(arr) {
  let qwe = [];
  for (let i = 0; i < arr.length; i += 9) {
    let qwe1 = [];
    qwe1.push(arr.slice(i, i + 9)); // создние млого массива
    qwe.push(qwe1); // создание большого маассива с вложенными массивами
  }
  return qwe;
  // for (let j = 0; j < qwe.length; j += 1) {
  //   for (let k = 0; k < qwe[j].length; k += 1) {
  //     console.log(qwe[j][k]);
  //   }
  // }
}
console.log(zal(stroka));

// let input = qwe.map((el) => el.join());
// console.log(input);

// let er = strokaIzm.map((el) => {
//   let newArr = [];
//   for (let i = 0; i < el[0].length; i += 1) {
//     newArr.push(el.split("", 9));
//   }
//   return newArr;
// });

// console.log(er);

// function rez(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(arr[0].split("", 9));
//   }
//   return newArr;
// }
// console.log(rez(er));
// er.forEach((el, index) => {
//   console.log(er.slice(index, index + 1));
// });
// var myString = "Привет, мир. Как дела?";
// var splits = myString.split(" ", 3);

// console.log(splits);

// var names = "Гарри Трамп ;Фрэд Барни; Хелен Ригби ; Билл Абель ;Крис Ханд ";

// console.log(names);

// var re = /\s*;\s*/;
// var nameList = names.split(re);

// console.log(nameList);

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8];

// numbersArr.forEach((value, index) => {
//   console.log(numbersArr.slice(index, index + 2));
// });

// function stroka1(arr, chunkSize) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     const chunk = arr.slice(i, i + chunkSize);
//     newArr.push(chunk);
//   }
//   return newArr;
// }
// console.log(stroka1((er, 9)));
