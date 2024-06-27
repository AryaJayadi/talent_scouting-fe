const section = document.querySelectorAll(".section");

document.addEventListener("scroll", function() {
    section.forEach(sec => {
        if (isInView(sec)) {
            sec.classList.add("section--visible")
        }
    })
})

// document.addEventListener("DOMContentLoaded", function() {
//     section.forEach(sec => {
//         if (isInView(sec)) {
//             sec.classList.add("section--visible")
//         }
//     })
// }) 

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}