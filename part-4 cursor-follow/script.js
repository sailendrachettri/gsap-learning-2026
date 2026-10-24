const main = document.querySelector("#main");

main.addEventListener('mousemove', (e)=>{
    gsap.to("#cursor", {
        x: e.x,
        y: e.y,
        duration: 1,
        ease:  "elastic.out(1,0.3)"
    })
})