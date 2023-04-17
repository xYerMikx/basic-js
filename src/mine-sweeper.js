const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let count = 0;
      for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, matrix.length - 1); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, matrix[0].length - 1); y++) {
          if (x !== i || y !== j) {
            count += matrix[x][y] ? 1 : 0;
          }
        }
      }
      row.push(count);
    }
    result.push(row);
  }

  return result;

}

module.exports = {
  minesweeper
};
