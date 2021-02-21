navigation();
footer();

function navigation() {
    const header = document.querySelector('.header');
    const menuBtn = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navListLinks = document.querySelectorAll('.nav-list li');

    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('nav-list-active');
        

        if(navList.classList.contains('nav-list-active')){
            header.classList.add('header-active')
            menuBtn.classList.add('menu-active');

        } else {
            menuBtn.classList.remove('menu-active');
            if(window.scrollY == 0){
                header.classList.remove('header-active')
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
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }

    })

}

function footer(){
    let year = new Date().getFullYear();
    let footer = document.querySelector('footer');

    let footerP = document.createElement('p');
    footerP.innerHTML = `&copy ${year} Ben Biederman`;
    footer.appendChild(footerP);
}




