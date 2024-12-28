gsap.registerPlugin(TextPlugin)

let activeClass = 0;
let titleCaptions = document.querySelectorAll('.title-capt')
var titleCaptionStrings = ["Software Developer","Frontend Developer"]

const typingAnimation = (kelas) =>
    gsap.to(kelas, {
        duration : 1, 
        text :titleCaptionStrings[activeClass],
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            titleCaptions.forEach((caption) =>
                caption.classList.toggle('hidden')
            );
        }
    })

typingAnimation(titleCaptions[0])

setInterval(() => {
    activeClass = activeClass == 1 ? 0 : 1
    typingAnimation(titleCaptions[activeClass], activeClass)
}, 2000)
