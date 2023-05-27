/*  
    untuk megecek terlebih dahulu apakah user sudah menuliskan angka atau belum
    jika belum, akan muncul peringatan
*/
function screening(){
    if (document.cek.angka.value == ""){
        alert("Angka kosong! Silahkan masukkan angka.");
        exit;
    }
}

//untuk mengonversi nilai yang berupa angka menjadi huruf mutu*/
function konversi(){
    var nilai = document.cek.angka.value;
    screening();
    if ((0 <= nilai) && (nilai <= 40)){
        document.cek.huruf.value="E";
    } else if ((41 <= nilai) && (nilai <= 55)){
        document.cek.huruf.value="D";
    } else if ((56 <= nilai) && (nilai <= 60)){
        document.cek.huruf.value="C";
    } else if ((61 <= nilai) && (nilai <= 65)){
        document.cek.huruf.value="BC";
    } else if ((66 <= nilai) && (nilai <= 70)){
        document.cek.huruf.value="B";
    } else if ((71 <= nilai) && (nilai <= 80)){
        document.cek.huruf.value="AB";
    } else if ((81 <= nilai) && (nilai <= 100)){
        document.cek.huruf.value="A";
    } else {
        alert("Silahkan masukkan nilai pada range 1-100.");
        exit;
    }
}

//proses konversi ketika tombol Enter ditekan
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah aksi default tombol Enter, yaitu mencegah pengiriman form ke server
        konversi(); // Memanggil fungsi hitung()
    }
});