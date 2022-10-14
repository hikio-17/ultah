async function pertama() {
  wallpaper.src = "assets/img/background.jpg";
  fotonimasi.src = "https://feeldreams.github.io/nimasi.gif";
  audio = new Audio("music.mp3");

  akhirkata = `Tidak ada kekuatan terhebat selain doa 
    dari mereka yang engkau sayangi, 
    jangan menyia-nyiakan 
    perjuangan mereka dalam hidupmu, 
    Banggakan mereka !!! 🥳      `;
  akhirkata2 = "Happy Birthday!!!";
  palingakhir.innerHTML = `if you lose, it's not over. if you stop, then it will be over.`;

  await swalst.fire("Tunggu");
  lanjut();
}
pertama();
