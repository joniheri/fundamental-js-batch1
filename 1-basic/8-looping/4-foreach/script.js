let dataFruits = ["Mangga", "Jeruk", "Pepaya", "Aple"];
let dataCars = [
  {
    productName: "Avanza",
    id: 1002,
    brand: "Toyota",
  },
  {
    productName: "Pajero Sport",
    id: 1001,
    brand: "Mitsubishi",
  },
  {
    productName: "Expander Sport",
    id: 1003,
    brand: "Mitsubishi",
  },
];

console.table(dataFruits);
console.table(dataCars);

// foreach() hanya bisa digunakan untuk data array
dataFruits.sort().forEach((item, index) => {
  console.log(`${index + 1}. Ini ${item}`);
});
console.table(dataFruits);

// Sort by Product Name ASC
dataCars
  .sort((a, b) => {
    if (a.productName.toLowerCase() < b.productName.toLowerCase()) {
      return -1;
    } else if (a.productName.toLowerCase() > b.productName.toLowerCase()) {
      return 1;
    }
  })
  .forEach((item, index) => {
    console.log(`${index + 1}. Ini Mobile ${item.productName}`);
  });
console.table(dataCars);
