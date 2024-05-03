const jwt = require("jsonwebtoken");
const secretKey = "Lieefaith";
const payload = { userId: 290108, username: "adli", kelas: "XI" };

const generateToken = jwt.sign(payload, secretKey);
console.log(generateToken);
