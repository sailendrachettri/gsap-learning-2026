
gsap.registerPlugin(ScrollTrigger);

const heading = document.querySelector("#page2 h1");

gsap.to(heading, {
  x: () => -(heading.scrollWidth - window.innerWidth),
  ease: "none",

  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: () => `+=${Math.max(
      0,
      heading.scrollWidth - window.innerWidth
    )}`,
    scrub: 1,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
  },
});
