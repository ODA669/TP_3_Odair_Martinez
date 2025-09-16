/*******************service worker*****************************/

/*********gsap animation **************************************/

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.fromTo(
//     ".img-logo img",
//     { scale: 0.5, opacity: 3 },
//     { scale: 1, opacity: 1, duration: 10, ease: "elastic.out(0.8, 0.3)" }
//   );
// });

/**Ajustement du debut de video en seconds* */
const video = document.getElementById("bg-video");

// charge de video duration
video.addEventListener("loadedmetadata", () => {
  video.currentTime = 4.5; //le video star en 4.5 secondes
});
/*  Animación con Framer Motion  */

const { animate } = window.framerMotion;

animate("#form", { opacity: [0, 1], y: [-50, 0] }, { duration: 1 });
animate("#map", { opacity: [0, 1], x: [50, 0] }, { duration: 1, delay: 0.5 });
animate("#about", { opacity: [0, 1], y: [50, 0] }, { duration: 1, delay: 1 });
animate(
  "#services",
  { opacity: [0, 1], y: [50, 0] },
  { duration: 1, delay: 1.3 }
);
animate("#faq", { opacity: [0, 1], y: [50, 0] }, { duration: 1, delay: 1.6 });
