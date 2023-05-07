const pelanganSatu = (aa, index, asyncCallback) => {
  console.log("Loading Pelanggan 1...");
  setTimeout(() => {
    asyncCallback(console.log(`Ini pelanggan 1 ${aa}, dengan umur: ${index}`));
  }, 1000);
};

const pelanganDua = () => {
  console.log(`Ini pelanggan 2`);
};

const pelanganTiga = (namaSaya, cb) => {
  console.log("Loading Pelanggan 3...");
  setTimeout(() => {
    cb(console.log(`Ini pelanggan 3 nama saya: ${namaSaya}`));
  }, 3000);
};

const pelanganEmpat = () => {
  console.log("Loading Pelanggan 4...");
  setTimeout(() => {
    console.log(`Ini pelanggan 4`);
  }, 2000);
};

let myName = "Jon Heri";
const age = 40;

pelanganSatu(myName, age, () => {
  pelanganDua();
  pelanganTiga(myName, () => {
    pelanganEmpat();
  });
});

// Nested Callback
// 1,2,4,3
