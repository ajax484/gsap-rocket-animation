const textContainer = document.querySelector("#text-container");
const img = document.querySelector('img');
const giantBlock = document.querySelector('#giant-block');
const tl = gsap.timeline({ defaults: { duration: .75 } });
var countdown = 3;

const timer = setInterval(runTimer, 1500);

function rocket() {
    textContainer.style.display = 'none';
    tl.set([img, giantBlock], { autoAlpha: 1, display: 'block' })
        .addLabel('vibrate')
        .to(img, { duration: 0.1, x: "-=5", yoyo: true, repeat: -1 }, 'vibrate')
        .to(img, { duration: 10, y: "-1000" }, 'vibrate')
        .from(giantBlock, { duration: 10, y: "2000" }, 'vibrate')
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