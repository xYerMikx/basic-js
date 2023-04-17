const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const parts = email.split('@');
  let domain = parts.pop();
  while (parts.length > 0 && domain.startsWith('.')) {
    domain = parts.pop() + domain;
  }
  domain = domain.replace(/^\.+|\.+$/g, '');
  return domain;
}

module.exports = {
  getEmailDomain
};
