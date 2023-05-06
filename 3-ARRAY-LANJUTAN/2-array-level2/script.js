let dataArray = [
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
console.log(dataArray[2].objectLainnya[0]);
document.getElementById("testing").innerHTML = dataArray[2].objectLainnya[0];
