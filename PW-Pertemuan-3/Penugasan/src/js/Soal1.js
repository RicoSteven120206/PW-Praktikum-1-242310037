function tampilkanData(event) {
    event.preventDefault();

    let nim = document.getElementById("nim").value;
    document.getElementById("out_nim").innerHTML = nim;

    let nama = document.getElementById("nama").value;
    document.getElementById("out_nama").innerHTML = nama;

    let jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    document.getElementById("out_jenis_kelamin").innerHTML = jenis_kelamin;

    let agama = document.getElementById("agama").value;
    document.getElementById("out_agama").innerHTML = agama;

    let status = document.getElementById("status").value;
    document.getElementById("out_status").innerHTML = status;

    let jurusan = document.getElementById("jurusan").value;
    document.getElementById("out_jurusan").innerHTML = jurusan;

    let komentar = document.getElementById("komentar").value;
    document.getElementById("out_komentar").innerHTML = komentar;
}