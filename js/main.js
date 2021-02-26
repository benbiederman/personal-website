
//Landing Page Button
const viewWork = document.querySelector('.landing-btn');

viewWork.addEventListener('click', () => {
    window.location.href='portfolio.html';
})

const downloadResume = document.querySelector('.btn-about');

downloadResume.addEventListener('click', () => {
    window.open('/doc/ben-biederman-resume.pdf');
})

const aboutSection = document.querySelector('.about-section');

document.addEventListener('scroll', () => {
    if(window.scrollY >= 500) {
        aboutSection.style.opacity = '1';
        aboutSection.style.animation = `slide 0.5s`
    }
})