/* show menu */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', "nav-menu")

// remove menu mobile

const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(item => item.addEventListener('click', linkAction))

//scroll sections active link

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(item => {
        const sectionHeight = item.offsetHeight;
        const sectionTop = item.offsetTop - 50;
        sectionId = item.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

/* change background header */

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY > 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// show crolltop

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY > 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

// gsap

gsap.from('.home__img', { opacity: 0, duraion: 2, delay: 0.5, x: 60 });
gsap.from('.home__data', { opacity: 0, duraion: 2, delay: 0.8, y: 25 })
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duraion: 2, delay: 1, y: 25, ease: 'expo.out', stagger: 0.2 })

gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duraion: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: 0.2 })
gsap.from('.nav__item', { opacity: 0, duraion: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: 0.2 })
gsap.from('.home__social-icon', { opacity: 0, duraion: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: 0.2 })