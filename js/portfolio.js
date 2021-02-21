const portfolioSelection = document.querySelector('.portfolio-section');

class Portfolio {
    constructor(image, description, name, info, codeLink, websiteLink){
        this.image = image;
        this.description = description;
        this.name = name;
        this.info = info;
        this.codeLink = codeLink;
        this.websiteLink = websiteLink;
    }
}

const greenBayGuy = new Portfolio('/img/portfolio/img/the-green-bay-guy.jpg',
'Lambeau Field during a snowy night game', 
'The Green Bay Guy', 
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, 
`https://github.com/benbiederman/the-green-bay-guy`, 
`http://thegreenbayguy.com/`
);

const howlerCoffee = new Portfolio('img/portfolio/img/howler-coffee.jpg',
'a bag of Howler Coffee - Bucksaw Blend',  
'Howler Coffee Co', 
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, 
`https://github.com/benbiederman/howler-coffee-co`, 
`/portfolio/howler-coffee-co/home.html`
);

const captainPJsBBQ = new Portfolio('img/portfolio/img/captain-pjs.jpg', 
'Captain PJs BBQ ribs',
'Captain PJs BBQ', 
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br> when an unknown printer took a galley of type and scrambled it to make a type specimen book.`, 
`https://github.com/benbiederman/howler-coffee-co`,
`portfolio/captain-pjs-bbq/home.html`
);

let portfolioItems = [greenBayGuy, howlerCoffee, captainPJsBBQ];

for(let i = 0; i < portfolioItems.length; i++){
    createPortfolioItem(portfolioItems[i]);
}

function createPortfolioItem(item) {
    const newItem = document.createElement('article');
    newItem.classList.add('portfolio-item');
    if(portfolioItems.indexOf(item)%2 === 0){
        newItem.classList.add('left');
    } else {
        newItem.classList.add('right');
    }
    newItem.tabIndex = 0;
    portfolioSelection.appendChild(newItem);

    const newImg = document.createElement('div');
    newImg.classList.add('portfolio-img')
    newItem.appendChild(newImg);

    const itemImg = document.createElement('img');
    itemImg.src = item.image;
    itemImg.description = item.description;
    newImg.appendChild(itemImg);

    const newInfo = document.createElement('div');
    newInfo.classList.add('portfolio-info');
    newItem.appendChild(newInfo);

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;
    newInfo.appendChild(itemName);

    const itemBio = document.createElement('p');
    itemBio.innerHTML = item.info;
    newInfo.appendChild(itemBio);

    const itemBtns = document.createElement('div');
    itemBtns.classList.add('portfolio-cta');
    newInfo.appendChild(itemBtns);

    const secondaryBtn = document.createElement('button');
    secondaryBtn.classList.add('btn-secondary');
    secondaryBtn.classList.add('btn-portfolio');
    secondaryBtn.textContent = 'View Code';
    itemBtns.appendChild(secondaryBtn);

    secondaryBtn.addEventListener('click', ()=> {
        window.open(item.codeLink);
    })

    const primaryBtn = document.createElement('button');
    primaryBtn.classList.add('btn-primary');
    primaryBtn.classList.add('btn-portfolio');
    primaryBtn.textContent = 'View Website';
    itemBtns.appendChild(primaryBtn);

    primaryBtn.addEventListener('click', () => {
        window.open(item.websiteLink);
    })
    
}