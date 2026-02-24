const text = "Hi! I'm Engy";
const typingElement = document.getElementById("typing");

let index = 0;
let isDeleting = false;
const typingSpeed = 120;
const deletingSpeed = 70;
const pauseAfterTyping = 1500;
const pauseAfterDeleting = 500;

function typeEffect() {
    if (!isDeleting) {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, pauseAfterTyping);
        }
    } else {
        if (index > 0) {
            typingElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            isDeleting = false;
            setTimeout(typeEffect, pauseAfterDeleting);
        }
    }
}

typeEffect();
