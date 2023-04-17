const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {}
  domains.forEach((domain) => {
    const domainParts = domain.split(".").reverse()
    let curr = ''
    domainParts.forEach((domainPart) => {
      curr += `.${domainPart}`
      if (res[curr]) {
        res[curr] += 1
      } else {
        res[curr] = 1
      }
    })
  })
  return res
}

module.exports = {
  getDNSStats
};
