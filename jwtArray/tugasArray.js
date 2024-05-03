const jwt = require("jsonwebtoken");
const secretKey = "bazma";

function verifikasiPendaftaran(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    // Jika token tidak valid atau terjadi kesalahan lainnya
    console.error("Token tidak valid:", error.message);
    return null;
  }
}

function pendaftaranLiburan(namaLengkap, alamatRumah, nomorKontak, tujuanTempat) {
 
  const dataPendaftaran = {
    nama_lengkap: namaLengkap,
    alamat_rumah: alamatRumah,
      nomor_kontak: nomorKontak,
    tujuan_tempat: tujuanTempat,
   
  };

  const tokenPendaftaran = jwt.sign(dataPendaftaran, secretKey);
  return tokenPendaftaran;
}

// Contoh penggunaan:
const arrLiburan = [
  {
    namaLengkap: "oasis josph",
    alamatRumah: "mekkah",
    nomorKontak: "08239723",
    tujuanTempat: "pantai"
  },
  {
    namaLengkap: "mount rifi",
    alamatRumah: "bogor",
    nomorKontak: "083892739862",
    tujuanTempat: "gunung"
  },
  {
    namaLengkap: "siti york",
    alamatRumah: "kalimantan",
    nomorKontak: "584984",
    tujuanTempat: "kota",
  },
  {
    namaLengkap: "carig tula",
    alamatRumah: "jakarta",
    nomorKontak: "5785885858",
    tujuanTempat: "curug mantap",
  },
  {
    namaLengkap: "watefa indah",
    alamatRumah: "tanggerang",
    nomorKontak: "13241324",
    tujuanTempat: "air terjun",
  },
];
const arrToken = [];

arrLiburan.forEach((Libur) => {
  const token = pendaftaranLiburan(Libur.namaLengkap, Libur.alamatRumah, Libur.nomorKontak, Libur.tujuanTempat);
  arrToken.push(token);
});

arrToken.forEach((token, index) => {
    const dataPendaftaran = verifikasiPendaftaran(token);
    if (dataPendaftaran) {
    console.log(
      `Data pendaftaran pelanggan dengan id ${index + 1}:`,
      dataPendaftaran, "data valid"
    );
  } else {
    console.log(`Token pelanggan dengan id ${index + 1} tidak valid`);
  }
});

function verifikasiPendaftaran(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    // Jika token tidak valid atau terjadi kesalahan lainnya
    console.error("Token tidak valid:", error.message);
    return null;
  }
}

function pendaftaranPembelajaran(
  namaLengkap,
  alamatRumah,
  nomorKontak,
  programBelajar
) {
  const dataPendaftaran = {
    nama_lengkap: namaLengkap,
    alamat_rumah: alamatRumah,
    nomor_kontak: nomorKontak,
    program_belajar: programBelajar,
  };

  const tokenPendaftaran = jwt.sign(dataPendaftaran, secretKey);
  return tokenPendaftaran;
}

// Contoh penggunaan:
const arrPendaftaran = [
  {
    namaLengkap: "Fulan bin Fulan",
    alamatRumah: "Jl. Jendral Sudirman No. 123",
    nomorKontak: "08123456789",
    programBelajar: "Pemrograman Python Dasar",
  },
  {
    namaLengkap: "Aisyah binti Aisyah",
    alamatRumah: "Jl. Gajah Mada No. 456",
    nomorKontak: "087654321",
    programBelajar: "Desain Grafis",
  },
  {
    namaLengkap: "Ahmad bin Ahmad",
    alamatRumah: "Jl. MH Thamrin No. 789",
    nomorKontak: "08111223344",
    programBelajar: "Pengembangan Web Lanjutan",
  },
  ,
  {
    namaLengkap: "IPUL BIN SAEPUL",
    alamatRumah: "Jl. mk gunung jadti No. 79",
    nomorKontak: "081293823344",
    programBelajar: "Coding sampai Jago",
  },
  ,
  {
    namaLengkap: "banz bin syahban",
    alamatRumah: "Jl. enrekang no 832",
    nomorKontak: "08119302730",
    programBelajar: "Desain aja lah ",
  },
];

const arrTokenPendaftaran = [];

arrPendaftaran.forEach((pendaftar) => {
  const token = pendaftaranPembelajaran(
    pendaftar.namaLengkap,
    pendaftar.alamatRumah,
    pendaftar.nomorKontak,
    pendaftar.programBelajar
  );
  arrTokenPendaftaran.push(token);
});

arrTokenPendaftaran.forEach((token, index) => {
  const dataPendaftaran = verifikasiPendaftaran(token);
  if (dataPendaftaran) {
    console.log(
      `Data pendaftaran siswa dengan ID ${index + 1}:`,
      dataPendaftaran,
      "Data valid"
    );
  } else {
    console.log(`Token siswa dengan ID ${index + 1} tidak valid`);
  }
});




