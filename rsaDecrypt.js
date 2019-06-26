const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const encrypted = "TNtnXkbsnYHkfK8u6619mv1b2DY7iOoLXfauB1YMywRYGGJPziQMKIbgAaFgq80EJUvdl5OeLzSGHRAtLRKVX56sypktyWUYZLowmpEJ+vpXt/9XAozmNdHP/GCRYXN76ZYJXDW+nVJSKd9AQY3uYAFPoP1lks+/3CBuX/XEDA4="
const pathToPrivateKey = "private.key"

const decryptStringWithRsaPrivateKey = function(toDecrypt, pathToPrivateKey) {
    const absolutePath = path.resolve(pathToPrivateKey);
    const privateKey = fs.readFileSync(absolutePath, "utf8");
    const buffer = Buffer.from(toDecrypt, "base64");
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    console.log('----- Decryption Using Private Key File -----');
    console.log('Decrypted Message: ', decrypted.toString("utf8"));
};

decryptStringWithRsaPrivateKey(encrypted, pathToPrivateKey);

module.exports = {
    decryptStringWithRsaPrivateKey: decryptStringWithRsaPrivateKey
}