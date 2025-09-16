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

gsap.from("#form", { opacity: 0, y: -50, duration: 1 });
gsap.from("#map", { opacity: 0, x: 50, duration: 1, delay: 0.5 });
gsap.from("#about", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from("#services", { opacity: 0, y: 50, duration: 1, delay: 1.3 });
gsap.from("#faq", { opacity: 0, y: 50, duration: 1, delay: 1.6 });
