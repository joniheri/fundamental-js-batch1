let dataMobil = [
  {
    id: 1001,
    namaProduct: "Jazz",
    brand: "Honda",
  },
  {
    id: 1002,
    namaProduct: "Avanza",
    brand: "Toyota",
  },
  {
    id: 1003,
    namaProduct: "Livina",
    brand: "Nissan",
  },
];
console.log(dataMobil);

const tableMobil = document.getElementById("dataMobilFromHtml");

let insertToTableHtml = ``;
// for (let i = 0; i < dataMobil.length; i++) {
//   insertToTableHtml += `<tr>`;
//   insertToTableHtml += `<td>${dataMobil[i].id}</td>`;
//   insertToTableHtml += `<td>${dataMobil[i].namaProduct}</td>`;
//   insertToTableHtml += `<td>${dataMobil[i].brand}</td>`;
//   insertToTableHtml += `</tr>`;
// }

// let i = 0;
// while (i < dataMobil.length) {
//   insertToTableHtml += `<tr>`;
//   insertToTableHtml += `<td>${i + 1}</td>`;
//   insertToTableHtml += `<td>${dataMobil[i].id}</td>`;
//   insertToTableHtml += `<td>${dataMobil[i].namaProduct}</td>`;
//   insertToTableHtml += `<td>${dataMobil[i].brand}</td>`;
//   insertToTableHtml += `</tr>`;
//   i++;
// }

// dataMobil.forEach((item, index) => {
//   insertToTableHtml += `<tr>`;
//   insertToTableHtml += `<td>${index + 1}</td>`;
//   insertToTableHtml += `<td>${item.id}</td>`;
//   insertToTableHtml += `<td>${item.namaProduct}</td>`;
//   insertToTableHtml += `<td>${item.brand}</td>`;
//   insertToTableHtml += `</tr>`;
// });

dataMobil.map((item, index) => {
  insertToTableHtml += `<tr>`;
  insertToTableHtml += `<td>${index + 1}</td>`;
  insertToTableHtml += `<td>${item.id}</td>`;
  insertToTableHtml += `<td>${item.namaProduct}</td>`;
  insertToTableHtml += `<td>${item.brand}</td>`;
  insertToTableHtml += `</tr>`;
});

tableMobil.innerHTML = insertToTableHtml;
