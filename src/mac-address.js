const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const parts = n.split("-")
  if (parts.length !== 6) {
    return false
  }
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (part.length !== 2) {
      return false
    }
    for (let j = 0; j < part.length; j++) {
      const charCode = part.charCodeAt(j) 
      if (!(charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0)) && !(charCode >= 'A'.charCodeAt(0) && charCode <= 'F'.charCodeAt(0)) && !(charCode >= 'a'.charCodeAt(0) && charCode <= 'f'.charCodeAt(0))
      ) {
        return false
      }
    }
  }
  return true
}

module.exports = {
  isMAC48Address
};
