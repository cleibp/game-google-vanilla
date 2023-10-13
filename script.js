const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() => dino.classList.remove("jump-animation"), 500);
}

document.addEventListener("keypress", (event) => {
  if (!dino.classList.contains("jump-animation")) {
    jump();
  }
});
