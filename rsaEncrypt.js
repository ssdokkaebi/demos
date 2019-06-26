const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const plaintext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
const pathToPublicKey = "public.key"

const encryptStringWithRsaPublicKey = function(toEncrypt, pathToPublicKey) {
    const absolutePath = path.resolve(pathToPublicKey);
    const publicKey = fs.readFileSync(absolutePath, "utf8");
    const buffer = Buffer.from(toEncrypt);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    console.log('----- Encryption Using Public Key File -----');
    console.log('Encrypted Message: ', encrypted.toString("base64"));
};

encryptStringWithRsaPublicKey(plaintext, pathToPublicKey)

module.exports = {
    encryptStringWithRsaPublicKey: encryptStringWithRsaPublicKey
}