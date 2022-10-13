function nongeser() {
  idgeser.style = "transform: scale(.1);opacity:0";
  fotolove.style = "opacity:1;visibility:visible";
}
function showDiv() {
  setTimeout(kpemb, 100);
  setTimeout(nongeser, 2500);
  document.getElementById("Content").style =
    "opacity:1;margin-top:10vh;animation:none 3s infinite;";
  document.getElementById("pergeseran").style = "opacity:1;visibility:visible;";
}
function showAkhir() {
  setInterval(createHeart, 200);
  document.getElementById("k2").style =
    "opacity:1;transform:scale(1);margin:0;";
  document.getElementById("Content").style.display = "none";
}
function mulaiakhir() {
  nonDiv();
  setTimeout(showAkhir, 500);
  setTimeout(finalis, 600);
}
function tombol() {
  contTom.style = "margin-top:20px;opacity:1;transform: scale(1);";
  ftom = 1;
}
ftom = 0;
function sjawab() {
  if (ftom == 1) {
    jawab();
  }
}
var aa = 0,
  pemb;
pemb = "";
var i = 0,
  halo;
halo = "";
var u = 0,
  text2;
text2 = "";
var o = 0,
  text3;
text3 = "";
var a = 0,
  final1;
final1 = "";
var ab = 0,
  final2;
final2 = "";
function kpemb() {
  document.getElementById("bodyblur").style = "opacity:.7;";
}
function finalis() {
  document.getElementById("bq").style =
    "opacity:1;visibility:visible;margin-top:0";
  setTimeout(showTom, 4000);
}
const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: "#FF0040",
});
const swalsy = Swal.mixin({
  confirmButtonText: "Iya",
  allowOutsideClick: false,
});
const swalst = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const b = Swal.getHtmlContainer().querySelector("b");
    timerInterval = setInterval(() => {
      Swal.getTimerLeft();
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  },
});
const style = document.createElement("style");
function play() {
  var audio = new Audio("" + linkmp3);
  audio.play();
}
const body = document.querySelector("body");
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  body.appendChild(heart);
}
setInterval(function name(params) {
  var heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);
function StartMarqueeL() {
  imglewat.style = "opacity:1;height:100px;";
  var marquee = document.getElementById("imglewat");
  marquee.start();
}
function StopMarqueeL() {
  var marquee = document.getElementById("imglewat");
  marquee.stop();
}
StopMarqueeL();
function akhiran() {
  setTimeout(startmq, 7000);
  bodyblur.style = "opacity:.4;animation:none";
  beneranblur.style =
    "-webkit-backdrop-filter:blur(5px); backdrop-filter:blur(5px)";
  wallpaper.style = "transform: scale(1.6)";
  pergeseran.style = "display:none";
  StartMarqueeL();
  idgeser.innerHTML = "";
  idkalimat.innerHTML = akhirkata2;
  idgeser.style =
    "opacity:1;transform: scale(1);font-size:16px;font-weight:400;margin:0 30px;margin-top:15px;";
  setTimeout(aksiakhir, 800);
}
function startmq() {
  var marquee = document.getElementById("palingakhir");
  marquee.start();
}
function stopmq() {
  var marquee = document.getElementById("palingakhir");
  marquee.stop();
}
stopmq();
async function menuju() {
  await swals.fire("OK!", "Kirim pesan ke WhatsApp aku, ya!", "success");
  window.location =
    "https://api.whatsapp.com/send?phone=6282237888697&text=" + pesanwhatsapp;
}
var aa = 0,
  akhirkata;
akhirkata = "";
function aksiakhir() {
  if (aa < akhirkata.length) {
    idgeser.innerHTML += akhirkata.charAt(aa);
    aa++;
    setTimeout(aksiakhir, 65);
  }
  if (aa == akhirkata.length) {
    idkalimat.style =
      "opacity:1;transform: scale(1);font-size:16px;margin-top:20px";
    setTimeout(showpalingakhir, 1100);
  }
}
function showpalingakhir() {
  palingakhir.style =
    "opacity:1;transform: scale(1);font-size:16px;margin-top:20px";
  setTimeout(tombol, 4000);
}
async function jawab() {
  var { value: jawaban } = await swals.fire({
    title: "Isi Pesan Kamu",
    input: "text",
    allowOutsideClick: false,
    showCancelButton: false,
  });
  if (jawaban && jawaban.length < 21) {
    window.jawaban = jawaban;
    pesanwhatsapp = jawaban;
    menuju();
  } else {
    await swals.fire(
      "Ups!",
      "Kolom tidak boleh kosong atau lebih dari 20 karakter, ya!"
    );
  }
}
async function lanjut() {
  await swals.fire("Selamat datang!", "Sekarang lihat ini ya :)");
  showDiv();
  audio.play();
}
