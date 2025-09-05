/*********gsap animation **************************************/

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".img-logo img",
    { scale: 0.5, opacity: 3 },
    { scale: 1, opacity: 1, duration: 10, ease: "elastic.out(0.8, 0.3)" }
  );
});

/***********effect pour les card de  la page music ***********/

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
