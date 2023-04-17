const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = ''
  let counter = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    } else {
      res += counter > 1 ? counter + str[i] : str[i]
      counter = 1
    }
    if (i === str.length - 2 && str[i] === str[i + 1]) {
      res += counter + str[i];
      break
    }
  }
  return res
}

module.exports = {
  encodeLine
};
