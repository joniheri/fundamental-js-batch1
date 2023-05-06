// cara pertama
function functionPertama() {
  console.log("Ini function cara pertama");
}

// cara kedua
const functionKedua = new Function(
  console.log("Ini function cara Kedua aksdfkds")
);

// cara ketiga -->arrow function
const functionKetiga = () => {
  console.log("Ini function cara Ketiga");
};

functionKetiga();
functionKedua();
functionPertama();
