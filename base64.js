const data = "this is a demo of base64"

encoded = Buffer.from(data).toString('base64')
decoded = Buffer.from(encoded, 'base64').toString('ascii')
console.log('----- Encoding Using Base64 -----');
console.log('Decoded: ', decoded);
console.log('Encoded: ', encoded);