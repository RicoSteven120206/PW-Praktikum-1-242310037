function hitungBunga(event) {
    event.preventDefault();

    let saldo = Number(document.getElementById('saldo').value);
    let bunga = Number(document.getElementById('bunga').value);
    let waktu = Number(document.getElementById('waktu').value);

    let hasil = "";
    for(let i = 1; i <= waktu; i++) {
        saldo = saldo + (saldo * bunga / 100);
        hasil += "Saldo Bulan " + i + "= Rp." + saldo + "<br>";
    }

    document.getElementById('hasil').innerHTML = hasil;
}