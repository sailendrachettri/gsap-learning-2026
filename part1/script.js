// gsap.to("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotation: 360,
//     borderRadius: "50%",
//     scale: 2
// })


// gsap.from("#box", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotation: 360,
//     borderRadius: "50%",
//     scale: 2
// })

var tl = gsap.timeline();

tl.to("#box", {
     x: 1000,
    duration: 2,
    delay: 1,
    rotation: 360,
    borderRadius: "50%",
    yoyo: true,
    repeat: -1
})

tl.to("#box1", {
    x:1000,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

tl.to("#box2", {
    x:1000,
    borderRadius: "50%",
    rotation: 360,
    duration: 2,
    repeat: -1,
    yoyo: true,
})


