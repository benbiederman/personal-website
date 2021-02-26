
//Landing Page Button
const viewWork = document.querySelector('.landing-btn');

viewWork.addEventListener('click', () => {
    window.location.href='portfolio.html';
})

const downloadResume = document.querySelector('.btn-about');

downloadResume.addEventListener('click', () => {
    window.open('/doc/ben-biederman-resume.pdf');
})

