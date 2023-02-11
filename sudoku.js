const fs = require("fs");

const stroka = fs.readFileSync(`${__dirname}/stroka1.txt`, "utf-8");

const strokaIzm = stroka.split("");
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
// const chalk= require('chalk');
// const input = [
//   ["5", "3", "3", "4"],
//   ["6", "5", ".", "1"],
//   [".", "9", "8", "."],
//   ["8", ".", ".", "."],
// ];

// const zal = require("./maksim");
// console.table(zal);
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

const pop = zal(strokaIzm);
console.log(pop);
// const b = zal(
//   "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
// );

function solve(board) {
  const size = 9;
  const boxSize = 3;
  function findEmpty(board) {
    //// поиски координат пустой клетки
    for (let row = 0; row < size; row++) {
      for (let colum = 0; colum < size; colum++) {
        if (board[row][colum] === ".") {
          return [row, colum];
        }
      }
    }
    return null;
  }
  ///// проверка на валидность нашего клетки
  const validate = (num, pos, board) => {
    const [row, colum] = pos;

    ///////проверяем колонку
    for (let i = 0; i < size; i++) {
      if (board[i][colum] === num && i !== row) {
        return false;
      }
    }
    ////////проверяем строку
    for (let i = 0; i < size; i++) {
      if (board[row][i] === num && i !== colum) {
        return false;
      }
    }

    /////// находим и проверяем квадрат
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxCol = Math.floor(colum / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== row && j !== colum) {
          return false;
        }
      }
    }
    return true;
  };

  const solve = () => {
    const currPos = findEmpty(board);
    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValidate = validate(currNum, currPos, board);
      if (isValidate) {
        const [x, y] = currPos;
        board[x][y] = currNum;
        if (solve()) {
          return true;
        }
        board[x], ([y] = "-");
      }
    }
    return false;
  };
  solve();
  return board;
}

// console.table(solve(input));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

// const str =
//   '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';

// function arrInStr(str) {
//   const arrInStr = str.split('');
// }
// console.log(arrInStr(str));
