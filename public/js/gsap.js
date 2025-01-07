gsap.registerPlugin(TextPlugin)

let titleCaptions = document.querySelectorAll('.title-capt')
var titleCaptionStrings = ["Software Developer","Frontend Developer"]

let activeClass = 0;
let isAnimating = false

const typingAnimation = (kelas) => {
    gsap.to(kelas, {
        duration : 1.5, 
        text :titleCaptionStrings[activeClass],
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            titleCaptions.forEach((caption) =>
                caption.classList.toggle('hidden')
            );
            
        }
    })
}

typingAnimation(titleCaptions[0])

setInterval(() => {
    activeClass = activeClass == 1 ? 0 : 1
    typingAnimation(titleCaptions[activeClass], activeClass)
}, 3000)



gsap.set('.wave-emote', {
    transformOrigin: "70% 80%" 
});

gsap.fromTo('.wave-emote', 
    { rotation: 40 }, 
    {
        rotation: -5, 
        duration: 1.2, 
        ease: "power1.inOut", 
        repeat: -1, 
        yoyo: true 
    }
);
