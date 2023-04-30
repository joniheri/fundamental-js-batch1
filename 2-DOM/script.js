const dataMobil = [
  {
    id: "a001",
    namaProduct: "Avanza",
    brand: "Toyota",
  },
  {
    id: "a002",
    namaProduct: "Jazz",
    brand: "Honda",
  },
  {
    id: "a003",
    namaProduct: "Terios",
    brand: "Daihatsu",
  },
];
console.log("data mobil: ", dataMobil);

let tabelDataMobil = "";
dataMobil.map((item, index) => {
  tabelDataMobil += `<tr>`;
  tabelDataMobil += `<td>${index + 1}</td>`;
  tabelDataMobil += `<td>${item.id}</td>`;
  tabelDataMobil += `<td>${item.namaProduct}</td>`;
  tabelDataMobil += `<td>${item.brand}</td>`;
  tabelDataMobil += `</tr>`;
});
document.getElementById("dataMobil").innerHTML = tabelDataMobil;
