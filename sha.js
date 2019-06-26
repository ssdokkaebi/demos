const crypto = require('crypto')
const shasum = crypto.createHash('sha1');

const password = "p@ssw0rd"
shasum.update(password);
console.log('----- SHA1 -----')
console.log('Plaintext: ', password);
console.log('Hashed: ', shasum.digest('hex'));