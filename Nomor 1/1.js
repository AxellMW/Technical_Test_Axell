function converter(jumlah) {
  jumlah = Math.floor(Math.abs(jumlah));

  const terbilang = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
  ];

  let pembagian = 0;
  let hasil = "";

  if (jumlah === 0) {
    hasil = "nol";
  } else if (jumlah < 12) {
    hasil = " " + terbilang[jumlah];
  } else if (jumlah < 20) {
    hasil = converter(Math.floor(jumlah - 10)) + " belas";
  } else if (jumlah < 100) {
    pembagian = Math.floor(jumlah / 10);
    hasil = converter(pembagian) + " puluh";
    if (jumlah % 10 !== 0) {
      hasil += converter(jumlah % 10);
    }
  } else if (jumlah < 200) {
    hasil = " seratus";
    if (jumlah % 100 !== 0) {
      hasil += converter(jumlah - 100);
    }
  } else if (jumlah < 1000) {
    pembagian = Math.floor(jumlah / 100);
    hasil = converter(pembagian) + " ratus";
    if (jumlah % 100 !== 0) {
      hasil += converter(jumlah % 100);
    }
  } else if (jumlah < 2000) {
    hasil = " seribu";
    if (jumlah % 1000 !== 0) {
      hasil += converter(jumlah - 1000);
    }
  } else if (jumlah < 1000000) {
    pembagian = Math.floor(jumlah / 1000);
    hasil = converter(pembagian) + " ribu";
    if (jumlah % 1000 !== 0) {
      hasil += converter(jumlah % 1000);
    }
  }

  return hasil;
}

let lagi = true;

while (lagi) {
  let nilai = prompt("Masukkan angka yang ingin di convert:");
  if (parseInt(nilai) >= 1000000) {
    alert("Program hanya menampilkan konversi hingga 6 digit saja!");
  } else {
    alert(converter(parseInt(nilai)));
  }
  lagi = confirm("convert lagi?");
}
