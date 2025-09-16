/**section index video */
document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".bg-video",
    { scale: 0.5, opacity: 3 },
    { scale: 1, opacity: 1, duration: 10, ease: "elastic.out(0.8, 0.3)" }
  );
});
/*****section maps contact */
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
