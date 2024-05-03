const jwt = require("jsonwebtoken");
const secretKey = "smk"

function createToken(id, nama, kelas, alamat, hobby) {
  const data = { id, nama, kelas, alamat, hobby };
  return jwt.sign(data, secretKey);
}

const arrSiswa = [
  {
    nama: "lover lavenda",
    kelas: "XII IPA",
    alamat: "Jalan doang No. pacaran",
    hobby: ["Membaca", "Bermain musik", "Menari"],
  },
  {
    nama: "Jane spoke",
    kelas: "XI IPS",
    alamat: "Jalan in aja No. mengeluh",
    hobby: ["Melukis", "main game", "Berkebun"],
  },
  {
    nama: "Vorkle sampie",
    kelas: "XII TKI",
    alamat: "Jalan nol No. angka",
    hobby: "bola"
  },
];

const arrToken = [];

// membuat perulangan arrSiswa
arrSiswa.forEach((siswa) => {
  const token = createToken(
    siswa.nama,
    siswa.kelas,
    siswa.alamat,
    siswa.hobby
  );
  arrToken.push(token);
});

// lakukan perulangan arrtoken
arrToken.forEach((token,index) => {
  console.log(`siswa dengan id ${index + 1} menggunakan token: ${token} `);
});