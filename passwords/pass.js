//Protecting passwords the right way

const crypto = require("crypto");

const password = "password1"

//will use randomBtyes method to create a salt
const salt = crypto.randomBytes(256).toString("hex");
console.log(salt);

const hashedPwd = crypto.pbkdf2Sync(password, salt, 100000, 512, "sha512");
console.log(hashedPwd); //returns a buffer

console.log(hashedPwd.toString("hex"));

