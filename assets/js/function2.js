async function pertama() {
  wallpaper.src = "assets/img/bg.jpg";
  fotonimasi.src = "https://feeldreams.github.io/nimasi.gif";
  audio = new Audio("music.mp3");

  akhirkata =
    "Semoga di hari spesialmu ini, kamu menjadi pribadi yang lebih baik yaaa 🥳      ";
  akhirkata2 = "Happy Birthday!!!";
  palingakhir.innerHTML = "Jangan lupa traktirannya! 🤣";

  await swalst.fire("Tunggu");
  lanjut();
}
pertama();
