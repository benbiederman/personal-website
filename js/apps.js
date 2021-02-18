function navigation() {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navListLinks = document.querySelectorAll('.nav-list li');

    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('nav-list-active');
        

        if(navList.classList.contains('nav-list-active')){
            header.style.backgroundColor = '#111';
            menuBtn.classList.add('menu-active');

        } else {
            menuBtn.classList.remove('menu-active');
            if(window.scrollY == 0){
                header.style.backgroundColor = 'transparent';
            }
        }

        navListLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `linkSlide 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })
    })

    window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
            header.style.backgroundColor = '#111';
        } else {
            header.style.backgroundColor = 'transparent';
        }

    })

}

navigation();

footer();

function footer(){
    let year = new Date().getFullYear();
    let footer = document.querySelector('footer');

    let footerP = document.createElement('p');
    footerP.innerHTML = `&copy ${year} Ben Biederman`;
    footer.appendChild(footerP);
}




