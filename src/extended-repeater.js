const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1,
  separator = options.separator || "+",
  addition = (options.addition !== undefined) ? String(options.addition) : '',
  additionRepeatTimes = options.additionRepeatTimes || 1,
  additionSeparator = options.additionSeparator || "|"

  let additionStr = Array.from({length: additionRepeatTimes}, () => addition).join(additionSeparator)
  let res = Array.from({length: repeatTimes}, () => str + additionStr).join(separator)

  return res
}

module.exports = {
  repeater
};
