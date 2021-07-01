const crypto = require("crypto");

const hash = crypto.createHash("md5");

hash.update("after");

console.log(hash.digest("hex"));

//will create sha256 hash
const shaHash = crypto.createHash("sha256");
shaHash.update("password1");
console.log(shaHash.digest("hex"));