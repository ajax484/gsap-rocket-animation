const textContainer = document.querySelector("#text-container");
const svg = document.querySelector('svg');
const giantBlock = document.querySelector('#giant-block');
const tl = gsap.timeline({ defaults: { duration: .75 } });
var countdown = 3;

const timer = setInterval(runTimer, 1500);

function rocket() {
    textContainer.style.display = 'none';
    tl.set([svg, giantBlock], { autoAlpha: 1, display: 'block' })
        .addLabel('vibrate')
        .to(svg, { duration: 0.1, x: "-=5", yoyo: true, repeat: -1 }, 'vibrate')
        .to(svg, { duration: 5, y: "-100vh" }, 'vibrate')
        .from(giantBlock, { duration: 10, y: "700" }, 'vibrate')
}

function runTimer() {
    if (countdown !== 0) {
        textContainer.innerHTML = countdown--;
        tl.to('body', {
            backgroundColor: '#FF0000', ease: Power2.easeOut,
            onComplete: function () {
                tl.to('body', { backgroundColor: '#000000', ease: Power2.easeOut });
            }
        })
    } else {
        clearInterval(timer);
        console.log('cleared');
        rocket();
    }
};

// tl.to(textContainer, {
//   content: 3,
//   onUpdate: function() {
//     textContainer.innerHTML = content;
//   }
// });