/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
// const chalk= require('chalk');
// const fromStrToArr = require('./maksim');

// let input = [
//   ['5', '3', '-', '-', '7', '-', '-', '-', '-'],
//   ['6', '-', '-', '1', '9', '5', '-', '-', '-'],
//   ['-', '9', '8', '-', '-', '-', '-', '6', '-'],
//   ['8', '-', '-', '-', '6', '-', '-', '-', '3'],
//   ['4', '-', '-', '8', '-', '3', '-', '-', '1'],
//   ['7', '-', '-', '-', '2', '-', '-', '-', '6'],
//   ['-', '6', '-', '-', '-', '-', '2', '8', '-'],
//   ['-', '-', '-', '4', '1', '9', '-', '-', '5'],
//   ['-', '-', '-', '-', '8', '-', '-', '7', '9'],
// ];
function solve(inputStr) {
  function fromStrToArr(inputStr) {
    const arr = inputStr.split('');
    const resArrBig = [];
    for (let i = 0; i < arr.length; i += 9) {
      resArrBig.push(arr.slice(i, i + 9)); // создние малого массив
    }
    return resArrBig;
  }

  const board = fromStrToArr(inputStr);
  const size = 9;
  const boxSize = 3;
  function findEmpty(board) {
    //// поиски координат пустой клетки
    for (let row = 0; row < size; row++) {
      for (let colum = 0; colum < size; colum++) {
        if (board[row][colum] === '.') {
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

  const solveMy = () => {
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
        if (solveMy()) {
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false;
  };
  solveMy();
  return board;
}

// const result = solve(
//   '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// );

// function pruvd(result) {
//   let resStr = '';
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] !== ',') {
//       resStr = resStr + result[i];
//     }
//   }
//   return resStr.replaceAll(',', '');
// }

// console.log(result.join().replaceAll(',', ''));

// console.table(
//   solve(
//     '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
//   )
// );

// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает булевое значение — решено это игровое поле или нет.
//  */
function isSolved(board) {
  const str = board.join();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      return false;
    }
  }
  return true;
}

// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает строку с игровым полем для последующего вывода в консоль.
//  * Подумай, как симпатичнее сформировать эту строку.
//  */
function prettyBoard(board) {
  console.table(board);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
