/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const input = [
  ['5', '3', '3', '4'],
  ['6', '5', '.', '1'],
  ['.', '9', '8', '.'],
  ['8', '.', '.', '.'],
];

// const input = [
//   ['5', '3', '3', '4'],
//   ['6', '5', '5', '1'],
//   ['6', '9', '8', '6'],
//   ['8', '7', '8', '9'],
// ];
function solve(board) {
  const size = 4;
  const boxSize = 2;
  function findEmpty(boar) {
    for (let row = 0; row < size; row++) {
      for (let colum = 0; colum < size; colum++) {
        if (board[row][colum] === '.') {
          return [row, colum];
        }
      }
    }
    return null;
  }

  return findEmpty(input);
  const currPos = findEmpty(board);
  if (currPos === null) return true;
}

console.log(solve(input));

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
