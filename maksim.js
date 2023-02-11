const fs = require("fs");

const stroka = fs.readFileSync(`${__dirname}/stroka1.txt`, "utf-8");

const strokaIzm = stroka.split("");
// console.log(strokaIzm);
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
    // let qwe1 = [];
    qwe.push(arr.slice(i, i + 9)); // создние млого массива
    // qwe.push(qwe1); // создание большого маассива с вложенными массивами
  }
  return qwe;
}
// console.log(zal(strokaIzm));

let result = zal(strokaIzm);
let result1 = result.map((el, i) => el.join(""));
console.log(result1.join(""));

const input = [
  ["5", "3", "3", "4"],
  ["6", "5", "1", 1],
  ["1", "9", "8", "1"],
  ["8", "1", "1", "1"],
];
let rrr = input.map((el) => {
  if (el === String) {
    return true;
  } else {
    return false;
  }
});

console.log(rrr);

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }

console.log(result.every((el) => el.typeof === "string"));
console.log(input.every((el) => el === Number));
// console.log(result.map((el) => el.join(",")));
// let qqq = result.map((el) => el.join(','));
// console.log(qqq);
// console.log(result1.join().replace(",", ""));
// console.log(result1);
// console.log(result.map((el) => el.join()));

module.exports = { zal };
