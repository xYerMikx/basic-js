const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrixArr) {
  let counter = 0
  for (let i = 0; i < matrixArr.length; i++) {
      for (let j = 0; j < matrixArr[i].length; j++) {
          if (matrixArr[i][j] === '^^') {
              counter++
          }
      }
  }
  return counter
}

module.exports = {
  countCats
};
