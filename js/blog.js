const blogSection = document.querySelector('.blog-section');

class Portfolio {
    constructor(image, description, name, date, info, link){
        this.image = image;
        this.description = description;
        this.name = name;
        this.date = date;
        this.info = info;
        this.link = link;
    }
}

const introduction = new Portfolio('/img/blog/welcome.jpg',
`Spray paint saying 123... Let's Go!`, 
'A blog! I guess?', 
'<time datetime="2021/02/26">02/26/2021</time>',
`Recently I’ve been thinking about starting a blog for my website. By no means would I consider myself a blogger, nor would I say writing exciting pieces of content is a strength of mine, but I think it would quite beneficial for me to do.  There are two big reasons why I think adding a blog to this website would be beneficial for me.`,  
`blog/welcome.html`
);

const projectPokedex = new Portfolio('/img/blog/pokedex.jpg',
`Pikachu wearing a detective hat`, 
'Project: Pokedex', 
'<time datetime="2021/03/04">03/04/2021</time>',
`I love nostalgia. There is just something so great about reminiscing on our childhood and what we loved as kids. Recently, my friend Tom and I have been having nostalgia days. During these nostalgia days, we’ll get together and enjoy some of the things we grew up loving: unhealthy food, late 90s / early 2000s TV shows, and Pokemon – a lot of Pokemon.`,  
`blog/project-pokedex.html`
);

const failure = new Portfolio('/img/blog/failure-preview.jpg',
`Solace Skate Co skateboard on a ledge`, 
'Failure', 
'<time datetime="2021/03/18">03/18/2021</time>',
`Failure is such a funny thing. It seems we do all we can to avoid failure, even if that means holding off on dreams or aspirations. We get stuck into this rut of doing something day in and day out that doesn’t seem to fit our dreams and aspirations because we’re too scared to fail. In fact, for a lot of us, our brain will convince us whatever we set out to do is going to fail. We worry that if we fail, we’re going to be humiliated.`,  
`blog/failure.html`
);


let blogItems = [failure, projectPokedex, introduction,];

for(let i = 0; i < blogItems.length; i++){
    createPortfolioItem(blogItems[i]);
}

function createPortfolioItem(item) {
    const newItem = document.createElement('article');
    newItem.classList.add('blog');
    if(blogItems.indexOf(item)%2 === 0){
        newItem.classList.add('left');
    } else {
        newItem.classList.add('right');
    }
    newItem.tabIndex = 0;
    blogSection.appendChild(newItem);

    const newImg = document.createElement('div');
    newImg.classList.add('blog-img')
    newItem.appendChild(newImg);

    const itemImg = document.createElement('img');
    itemImg.src = item.image;
    itemImg.description = item.description;
    newImg.appendChild(itemImg);

    const newInfo = document.createElement('div');
    newInfo.classList.add('blog-info');
    newItem.appendChild(newInfo);

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;
    newInfo.appendChild(itemName);

    const itemDate = document.createElement('p');
    itemDate.innerHTML = `- ${item.date} -`;
    itemDate.style.textAlign = 'center';
    itemDate.style.flex = '0';
    itemDate.style.marginTop = '0';
    itemDate.style.paddingBottom = '.2rem';
    itemDate.style.fontWeight = 'bold';
    newInfo.appendChild(itemDate);

    const itemBio = document.createElement('p');
    itemBio.innerHTML = item.info;
    newInfo.appendChild(itemBio);

    const itemBtns = document.createElement('div');
    itemBtns.classList.add('blog-cta');
    newInfo.appendChild(itemBtns);

    const primaryBtn = document.createElement('button');
    primaryBtn.classList.add('btn-primary');
    primaryBtn.classList.add('btn-blog');
    primaryBtn.textContent = 'Read More';
    itemBtns.appendChild(primaryBtn);

    primaryBtn.addEventListener('click', () => {
        window.location.href=item.link;
    })
    
}