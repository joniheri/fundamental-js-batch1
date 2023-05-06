// let dataArray1 = [
//   {
//     namaProduct: "Motor",
//     stok: 12,
//   },
//   {
//     namaProduct: "Mobil",
//     stok: 30,
//   },
//   {
//     namaProduct: "Pesawat",
//     stok: 2,
//     objectLainnya: ["Baju Wanita", "Baju Pria"],
//   },
// ];
// let dataArray2 = [
//   {
//     namaBuah: "Apel",
//     stok: 20,
//   },
//   {
//     namaBuah: "Pepaya",
//     stok: 5,
//   },
// ];
// let dataArray3 = [
//   {
//     namaMotor: "Beat",
//     stok: 20,
//   },
//   {
//     namaMotor: "Vario",
//     stok: 5,
//   },
//   {
//     namaMotor: "Mio",
//     stok: 5,
//   },
//   {
//     namaMotor: "Vespa Metic",
//     stok: 5,
//   },
// ];
// console.log(`Ini data array1: `, dataArray1);
// console.log(`Ini data array2: `, dataArray2);

// const gabunganArray = dataArray1.concat(dataArray2, dataArray3);
// console.log(`Array Gabungan: `, gabunganArray);
let dataArray1 = [
  {
    namaProduct: "Motor",
    stok: 12,
  },
  {
    namaProduct: "Mobil",
    stok: 30,
  },
  {
    namaProduct: "Pesawat",
    stok: 2,
    objectLainnya: ["Baju Wanita", "Baju Pria"],
  },
];
let dataArray2 = [
  {
    namaBuah: "Apel",
    stok: 20,
  },
  {
    namaBuah: "Pepaya",
    stok: 5,
  },
];
let dataArray3 = [
  {
    namaMotor: "Beat",
    stok: 20,
  },
  {
    namaMotor: "Vario",
    stok: 5,
  },
  {
    namaMotor: "Mio",
    stok: 5,
  },
  {
    namaMotor: "Vespa Metic",
    stok: 5,
  },
];
console.log(`Ini data array1: `, dataArray1);
console.log(`Ini data array2: `, dataArray2);

dataArray1.push(dataArray2, dataArray3);
console.log(`Array Gabungan: `, dataArray1);
