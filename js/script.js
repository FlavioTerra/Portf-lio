const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});


sr.reveal('.home-title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-img',{origin: 'right', delay: 400, duration: 2500}); 
sr.reveal('.home-social-icon',{ interval: 200}); 

sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

sr.reveal('.skills-subtitle',{}); 
sr.reveal('.skills-text',{}); 
sr.reveal('.skills-data',{origin: 'left', interval: 200}); 
sr.reveal('.skills-img',{origin: 'right', delay: 600});

sr.reveal('.Projects-img',{interval: 200}); 

sr.reveal('.contact-box',{interval: 200}); 