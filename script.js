// Ambil elemen button
const button1 = document.getElementById("clickMeButton1");
const button2 = document.getElementById("clickMeButton2");

// fungsi untuk tombol pertama
button1.addEventListener("click", () => {
    // arahkan ke situs kedua
    window.location.href = "https://myanimelist.net/profile/N_Natsuki";
});

// fungsi untuk tombol kedua
button2.addEventListener("click", () => {
    // arahkan ke situs kedua
    window.location.href = "https://myanimelist.net/animelist/N_Natsuki"
});