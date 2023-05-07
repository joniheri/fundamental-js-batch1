const pelanganSatu = () => {
  setTimeout(() => {
    console.log(`Ini pelanggan 1`);
  }, 1000);
};

const pelanganDua = () => {
  console.log(`Ini pelanggan 2`);
};

const pelanganTiga = () => {
  setTimeout(() => {
    console.log(`Ini pelanggan 3`);
  }, 3000);
};

const pelanganEmpat = () => {
  setTimeout(() => {
    console.log(`Ini pelanggan 4`);
  }, 2000);
};

pelanganSatu();
pelanganDua();
pelanganTiga();
pelanganEmpat();
