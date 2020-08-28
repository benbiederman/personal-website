
const portfolioSlide = () => {
    const portfolio = document.querySelectorAll('.portfolio div');
    const portfolioHeader = document.querySelectorAll('.portfolio-example h2');
    let b = 1;

    for(i=0; i < portfolio.length; i++){
        portfolio[i].style.animation = `fade 0.5s ease Forwards ${b * 0.5}s`
        portfolioHeader[i].style.animation = `fade 0.5s ease Forwards ${b * .5 + 0.5}s`
        b ++;
    }
}

portfolioSlide();