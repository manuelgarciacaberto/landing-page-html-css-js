document.addEventListener("DOMContentLoaded", () => {
    // Effetto scroll reveal
    const sections = document.querySelectorAll(".fade-in-on-scroll");

    const revealOnScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Per attivarlo se la pagina è già scrollata

    // Menu mobile toggle
    const menuBtn = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
