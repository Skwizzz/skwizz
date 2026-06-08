const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);

revealElements();