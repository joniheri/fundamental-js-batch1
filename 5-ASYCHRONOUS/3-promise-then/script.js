const pelanganSatu = (nama) => {
  console.log("Loading Pelanggan 1...");
  return new Promise((success) => {
    setTimeout(() => {
      success(console.log(`Ini pelanggan 1 nama saya: ${nama}`));
    }, 1000);
  });
};

const pelanganDua = () => {
  console.log(`Ini pelanggan 2`);
};

const pelanganTiga = () => {
  console.log("Loading Pelanggan 3...");
  return new Promise((success) => {
    setTimeout(() => {
      success(console.log(`Ini pelanggan 3 `));
    }, 3000);
  });
};

const pelanganEmpat = (umur) => {
  console.log("Loading Pelanggan 4...");
  setTimeout(() => {
    success(console.log(`Ini pelanggan 4 umur: ${umur}`));
  }, 2000);
};

let myName = "Jon Heri";
const age = 40;

pelanganSatu(myName).then(() => {
  pelanganDua();
  pelanganTiga().then(() => {
    pelanganEmpat(age);
  });
});

// then
