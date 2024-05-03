const jwt = require("jsonwebtoken");
const secretKey = 'Lieefaith';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5MDEwOCwidXNlcm5hbWUiOiJhZGxpIiwia2VsYXMiOiJYSSIsImlhdCI6MTcxNDYzMzA3M30.7dfNSFWwA4bO3FM1dHZsLBYXvPn4fOFnzqQpsq8dLaI";

jwt.verify(token, secretKey, (err,decode) => {
    if (err) console.error(err);
    else console.log("Token is Valid"); console.log(decode);
})


