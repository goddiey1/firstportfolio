const Selections = document.querySelectorAll("section");
Selections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.backgroundcolor = "#f9f9f9";
    });
    section.addEventListener("mouseleave", () => {
        section.style.backgroundcolor = "white";
    });
});
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
