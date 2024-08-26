/**
 * toggle navigation
 */
let openBtn = document.querySelector('.header__open');
let closeBtn = document.querySelector(".header__close");
let nav = document.querySelector('.header__nav');

openBtn.addEventListener("click", () =>{
    nav.classList.add('active');
});

closeBtn.addEventListener("click", () =>{
    nav.classList.remove('active');
});