const menu_btn = document.querySelector('#menu_btn');
const side_nav = document.querySelector('#side_nav');

menu_btn.addEventListener("click", () => {
    side_nav.classList.toggle("hide_nav");
    menu_btn.classList.toggle("fa-bars");
    menu_btn.classList.toggle("fa-x");
    menu_btn.classList.toggle("x_btn");
});

Array.from(side_nav.querySelectorAll('a')).forEach(link => {
    link.addEventListener("click", () => {
        side_nav.classList.toggle("hide_nav");
         menu_btn.classList.toggle("fa-bars");
        menu_btn.classList.toggle("fa-x");
        menu_btn.classList.toggle("x_btn");
    })
})