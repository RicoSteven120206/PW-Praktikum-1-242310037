function pemesananTiket(event) {
    event.preventDefault();

    let nama_pemesanan = document.getElementById('nama_pemesanan').value;
    let tujuan = document.getElementById('tujuan').value;
    let kelas = document.getElementById('kelas').value;
    let jumlah_tiket = Number(document.getElementById('banyak_tiket').value);
    let status_member = document.getElementById('status_member').value;
    let harga_tiket = 0;
    let subtotal = 0;
    let diskon = 0;
    let total = 0;

    if (tujuan === "jakarta" && kelas === "eksekutif") {
        harga_tiket = 70000;
    } else if (tujuan === "jakarta" && kelas === "bisnis") {
        harga_tiket = 40000;
    } else if (tujuan === "jakarta" && kelas === "ekonomi") {
        harga_tiket = 10000;
    } else if (tujuan === "solo" && kelas === "eksekutif") {
        harga_tiket = 80000;
    } else if (tujuan === "solo" && kelas === "bisnis") {
        harga_tiket = 50000;
    } else if (tujuan === "solo" && kelas === "ekonomi") {
        harga_tiket = 20000;
    } else if (tujuan === "surabaya" && kelas === "eksekutif") {
        harga_tiket = 90000;
    } else if (tujuan === "surabaya" && kelas === "bisnis") {
        harga_tiket = 60000;
    } else if (tujuan === "surabaya" && kelas === "ekonomi") {
        harga_tiket = 30000;
    };

    subtotal = harga_tiket * jumlah_tiket;

    if (status_member === "member") {
        diskon = subtotal * (10 / 100);
        total = subtotal - diskon;
    } else {
        total = subtotal;
        diskon = 0;
    };

    document.getElementById('out_nama').innerHTML = nama_pemesanan;
    document.getElementById('out_tujuan').innerHTML = tujuan;
    document.getElementById('out_kelas').innerHTML = kelas;
    document.getElementById('out_jumlah').innerHTML = jumlah_tiket;
    document.getElementById('out_status').innerHTML = status_member;
    document.getElementById('out_harga').innerHTML = "Rp." + harga_tiket;
    document.getElementById('out_subtotal').innerHTML = "Rp. " + subtotal;
    document.getElementById('out_diskon').innerHTML = "Rp. -" + diskon;
    document.getElementById('out_total').innerHTML = "Rp. " + total;
}