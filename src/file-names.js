const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const count = {}
  const res = []

  for (let name of names) {
    if (!(name in count)) {
      count[name] = 0
      res.push(name)
    } else {
      count[name]++
      const newName = `${name}(${count[name]})`
      if(newName in count) {
        count[newName]++
        res.push(`${newName}(${count[newName]})`)
      } else {
        res.push(newName)
        count[newName] = 0
      }
    }
  }

  return res
}

module.exports = {
  renameFiles
};
