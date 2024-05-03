const jwt = require('jsonwebtoken');
const secretKey = 'smktibazma'


function createToken(id, name, classes, age, hobby) {
    const data = { id, name, classes, age, hobby };
    return jwt.sign(data,secretKey)
}


function verify(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        delete decoded.iat;
        return decoded;
    } catch (err) {
        console.error(err)
        return null;
    }
}

const siswa = {
    id: 1,
    name: "Lieefaith",
    classes: "XI - SIJA",
    age: 15,
    hobby : "Coding and Football"
}

const token = createToken(siswa.id, siswa.name, siswa.classes, siswa.age, siswa.hobby);
console.log('token', token)

const decodeSiswa = verify(token);
console.log('decodeSiswa' , decodeSiswa)
