// gsap.from("#page1 .box", {
//     scale: 0,
//     duration: 2,
//     delay: 1
// })
// gsap.from("#page2 .box", {
//     scale: 0,
//     duration: 2,
//     // scrollTrigger: "#page2 .box"
//     scrollTrigger: {
//         trigger: "#page2 .box",
//         scroller: "body",
//         markers: true,
//         rotate: 360,
//         start: "top 60%",
//         scrub: 3
//     }
// })


gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true, 
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})