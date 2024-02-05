const navLinkEls = document.querySelectorAll('.nav__link');
const sectionEls = document.querySelectorAll('.section');
let currentSection = 'home';

window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    });

   
    navLinkEls.forEach(navLinkEl => {
        navLinkEl.classList.remove('active');
        if (navLinkEl.href.includes(currentSection)) {
            navLinkEl.classList.add('active');
        }
    });
});

