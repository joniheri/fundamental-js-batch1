const arrayBuah = [true, "Aple", "Semangka", 121];
console.log(`Nilai Array Awal :`, arrayBuah);

arrayBuah.push("Jeruk", "Pepaya");
console.log("Nilai Array setelah Push", arrayBuah);

const arrayMobil = [
  {
    namaMobil: "Avanza",
    brand: "Toyota",
    sisaStok: "5",
  },
  {
    namaMobil: "Jazz",
    brand: "Honda",
    sisaStok: "1",
  },
  "Suzuki",
];
console.log("Data Array Mobil", arrayMobil[0].brand);
