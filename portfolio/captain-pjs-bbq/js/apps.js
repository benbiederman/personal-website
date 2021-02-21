const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navList = document.querySelectorAll('.nav-list li');
    const header = document.querySelector('.header');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');

        //Animate Links
     navList.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        }else {
            link.style.animation = `navListFade 0.5s ease forwards ${index / 7 + 0.5}s`;
         }
        });
        //Burger animiation
  burger.classList.toggle('toggle');
    });
}

navSlide();

const navSticky = () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav-list');


    window.addEventListener('scroll', () => {
      header.classList.toggle('sticky', window.scrollY > 0)
      nav.classList.toggle('sticky-nav', window.scrollY > 0);  
    })
}

navSticky();

const contentSlide = () => {
    const about = document.querySelector('.about')

    window.addEventListener('scroll', () => {
        about.classList.add('about-show', window.scrollY > 300);
      })

}

contentSlide();