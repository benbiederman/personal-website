function menu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu-active')
        
        if(menu.classList.contains('menu-active')){
            menuBtn.innerHTML = 'Close';
            menuBtn.style.backgroundColor = '#F7C901'
            menuBtn.style.boxShadow = '0px 0px 10px #505050';
        } else {
            menuBtn.innerHTML = 'Menu';
            menuBtn.style.backgroundColor = '#ffef02'
            menuBtn.style.boxShadow = '0px 0px 10px #111';
            
        }
    })

}

menu();
