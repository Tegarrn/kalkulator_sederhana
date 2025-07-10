function hitungDiskon() {
  const harga = parseFloat(document.getElementById('harga').value);
  const diskon = parseFloat(document.getElementById('diskon').value);

  if (isNaN(harga) || isNaN(diskon)) {
    document.getElementById('hasil').innerText = "Masukkan nilai yang valid.";
    return;
  }

  const potongan = (diskon / 100) * harga;
  const total = harga - potongan;

  document.getElementById('hasil').innerText = `Harga Setelah Diskon: Rp ${total.toLocaleString()}`;
}



