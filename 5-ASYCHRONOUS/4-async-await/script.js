const pelanganSatu = () => {
  return new Promise((success) => {
    setTimeout(() => {
      success(console.log(`Ini pelanggan 1`));
    }, 1000);
  });
};

const pelanganDua = () => {
  console.log(`Ini pelanggan 2`);
};

const pelanganTiga = () => {
  return new Promise((bebas) => {
    setTimeout(() => {
      bebas(console.log(`Ini pelanggan 3`));
    }, 3000);
  });
};

const pelanganEmpat = () => {
  setTimeout(() => {
    console.log(`Ini pelanggan 4`);
  }, 2000);
};

const urutkanData = async () => {
  await pelanganSatu();
  pelanganDua();
  await pelanganTiga();
  pelanganEmpat();
};

urutkanData();
