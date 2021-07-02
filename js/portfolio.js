const portfolioSection = document.querySelector('.portfolio-section');

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

const greenBayGuy = new Portfolio('/img/portfolio/the-green-bay-guy.jpg',
'Lambeau Field during a snowy night game', 
'The Green Bay Guy', 
`The Green Bay Guy is a side project of mine. I started this side project back in 2017 that has grown far beyond what I had imagined when I started it. Coincidentally, this side project is what introduced me to an interest and passion in web development. In the years since I’ve started this project, I’ve built and rebuilt this website numerous times. 
<br>
<br>
Recently, I was excited to add a search feature in my local’s guide, podcast, and recipe sections. 
`, 
`https://github.com/benbiederman/the-green-bay-guy`, 
`http://thegreenbayguy.com/`
);

const howlerCoffee = new Portfolio('/img/portfolio/howler-coffee.jpg',
'a bag of Howler Coffee - Bucksaw Blend',  
'Howler Coffee Co', 
`To help build up my portfolio, I decided to find a local website and rebuild it. I wanted to see how I could design and build a website compared to their current one. As part of this challenge, I wanted to find a website that had an online shop, so I could build a feature that I hadn’t built yet – a shopping cart. The company I ended up choosing was (I’m sure you’ve already guessed it by the large heading and photo) Howler Coffee Co.
<br>
<br>
This was a fun website for me to build since I’m a big fan of Howler Coffee Co and their coffee. I order it quite regularly and drank plenty of it while building out this website. If you’d like to compare the websites yourself, or order some good coffee, you can find their website <a href="https://www.howlerbeans.com/" target="_blank">here</a>.
`, 
`https://github.com/benbiederman/howler-coffee-co`, 
`/portfolio/howler-coffee-co/home.html`
);

const pokedex = new Portfolio('/img/portfolio/pokedex.jpg', 
'cartoon version a Pokedex',
'Pokedex', 
`This is a project my 10-year-old self would be really proud of. The idea for this project stemmed from the frustrations in playing Pokémon Red, Pokémon Blue, or Pokémon Yellow as a kid. In the game, you would encounter new/different Pokémon and could never remember if you had already caught them or not. Recently, I started playing the game again to enjoy some nostalgia and found myself with the same frustrations.
<br>
<br>
I decided to build this project to help me monitor my progress in the game. It allows me to update what Pokémon I’ve seen and caught along the way. That way, while playing the game, I can reference to it anytime I encounter a Pokémon I’m not quite sure if I have or not. It was somewhat a silly project – but a very useful one for me!
 `,
'https://github.com/benbiederman/pokemon-game-tracker',
`portfolio/pokedex/home.html`
);

const pokemonTCG = new Portfolio('/img/portfolio/api-pokedex.jpg',
'Pokeball with Pokemon cards scattered',
'Pokemon TCG', 
`Recently I stumbled upon an API based around Pokémon Trading Card Game. Since I’ve been on a nostalgia kick lately, I decided I’d make an app where I can search for any Pokémon and find every card made of that Pokémon using the data from the API. I also decided I’d add a Shop Now button to allow people to be able to look up the card on eBay if they’d like to buy it.
<br>
<br>
This was a really fun project to build. There’s nothing better than a heavy dose of nostalgia while building a project. I’ve found myself browsing all the card arts from over the years, it was cool to have it all in one centralized location. `,
'https://github.com/benbiederman/pokemon-tcg',
'portfolio/pokemon-tcg-api/home.html'
);

const findAPhoto = new Portfolio('/img/portfolio/find-a-photo.jpg',
'Collage of photos',
'Find-a-Photo', 
`As an avid user of Pexels, once I learned they had an API you could use for projects, I thought it’d be a fun way to learn about APIs. I decided to build a find-a-photo app to be able to find any photos I wish without using their website. 
<br>
<br>
This website was built using HTML, CSS, and JavaScript. It was a fun project that inspired me to build a Pokedex using an API as well.   
`,
'https://github.com/benbiederman/pokedexAPI',
'portfolio/find-a-photo/home.html'
);



let portfolioItems = [pokemonTCG, findAPhoto, pokedex, greenBayGuy, howlerCoffee];

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
    portfolioSection.appendChild(newItem);

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
    primaryBtn.textContent = 'View Project';
    itemBtns.appendChild(primaryBtn);

    primaryBtn.addEventListener('click', () => {
        window.open(item.websiteLink);
    })
    
}