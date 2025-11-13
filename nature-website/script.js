// Simple script to toggle nature sound
const sound = document.getElementById("natureSound");

document.body.addEventListener("click", () => {
  if (sound.paused) sound.play();
});
