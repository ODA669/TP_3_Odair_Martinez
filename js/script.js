/*******************service worker*****************************/

// Register service worker.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").then((reg) => {
      console.log("Service worker registered.", reg);
    });
  });
}

/*********gsap animation **************************************/

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".img-logo img",
    { scale: 0.5, opacity: 3 },
    { scale: 1, opacity: 1, duration: 10, ease: "elastic.out(0.8, 0.3)" }
  );
});

/**Ajustement du debut de video en seconds* */
const video = document.getElementById("bg-video");

// Cuando el video carga su metadata (duración, etc.)
video.addEventListener("loadedmetadata", () => {
  video.currentTime = 4.5; // empieza en el segundo 5
});
/***********effect pour les card de  la page music ***********/

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
