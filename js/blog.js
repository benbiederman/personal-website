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

const greenBayGuy = new Portfolio('/img/blog/welcome.jpg',
`Spray paint saying 123... Let's Go!`, 
'A blog! I guess?', 
'<time datetime="2021/02/26">02/26/2021</time>',
`Recently I’ve been thinking about starting a blog for my website. By no means would I consider myself a blogger, nor would I say writing exciting pieces of content is a strength of mine, but I think it would quite beneficial for me to do.  There are two big reasons why I think adding a blog to this website would be beneficial for me.`,  
`blog/welcome.html`
);


let blogItems = [greenBayGuy];

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