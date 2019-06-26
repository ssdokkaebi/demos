const plaintext = "this is a demo of md5";
const crypto = require('crypto');

const md5 = crypto.createHash('md5').update(plaintext).digest("hex");
console.log('----- Hashing Using MD5 -----');
console.log('Plaintext: ', plaintext)
console.log('Hashed: ', md5)
