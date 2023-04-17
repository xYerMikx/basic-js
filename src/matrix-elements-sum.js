const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0
  const rows = matrix.length
  const columns = matrix[0].length
  const forbidden = Array.from(columns).fill(false)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        forbidden[j] = true
      } else if (!forbidden[j]) {
        res += matrix[i][j]
      }
    }
  }
  return res
}

module.exports = {
  getMatrixElementsSum
};
