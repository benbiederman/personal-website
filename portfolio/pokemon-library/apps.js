const addBtn = document.querySelector('.add-btn');
const workspace = document.querySelector('.workspace');

//New Pokemon
class Pokemon {
    constructor(name, energy, set, available) {
        this.name = name;
        this.energy = energy;
        this.set = set;
        this.available = available;
    }
}

//Library of Pokemon Cards
let myCollection = [
    {
        name: "pikachu v",
        energy: "lightning",
        set: "Vivid Voltage",
        available: true
    },
    {
        name: "Koffing",
        energy: "darkness",
        set: "Shining Fates",
        available: true
    },
    {
        name: "Ditto",
        energy: "colorless",
        set: "Shining Fates",
        available: true
    },
    {
        name: "Pikachu v",
        energy: "lightning",
        set: "Shining Fates",
        available: true
    },
    {
        name: "Grookey",
        energy: "grass",
        set: "Vivid Voltage",
        available: true
    },
    {
        name: "Indeedee V",
        energy: "psychic",
        set: "Shining Fates",
        available: true
    },
    {
        name: "Scizor V",
        energy: "metal",
        set: "Vivid Voltage",
        available: true
    },
    {
        name: "Machamp",
        energy: "fighting",
        set: "1st Edition",
        available: true
    }
    ,
    {
        name: "Talonflame V",
        energy: "fire",
        set: "Vivid Voltage",
        available: true
    }
    ,
    {
        name: "Corviknight Vmax",
        energy: "metal",
        set: "Battle Styles",
        available: true
    },
    {
        name: "Crobat Vmax",
        energy: "darkness",
        set: "Shining Fates",
        available: true
    },
    {
        name: "Eevee Vmax",
        energy: "colorless",
        set: "Shining Fates",
        available: true
    }
];


function newPokemon(name, energy, set, available) {
    let pokemon = new Pokemon(name, energy, set, available);

    myCollection.push(pokemon);
}



// Display Pokemon
function generatePokemon(){
    clear();
    const collectionDiv = document.createElement('div');
    collectionDiv.classList.add('collection');
    workspace.appendChild(collectionDiv);

    for(let i = 0; i < myCollection.length; i++){
        createPokemon(collectionDiv, myCollection[i].name, myCollection[i].energy, myCollection[i].set, myCollection[i].available, i);
    }
}

generatePokemon();

//Creates New Pokemon
function createPokemon(container, name, energy, set, available, id){
    const newPokemon = document.createElement('div');
    newPokemon.classList.add('pokemon-card');
    if(available){
        newPokemon.classList.add('available');
        switch(energy) {
            case 'colorless':
                newPokemon.style.backgroundColor = '#aec6de';
                newPokemon.style.border = '5px solid #4f8dc0'
                break;
            case 'darkness':
                newPokemon.style.backgroundColor = '#619eb0';
                newPokemon.style.border = '5px solid #1d3f48'
                break;
            case 'dragon':
                newPokemon.style.backgroundColor = '#be8e10';
                newPokemon.style.border = '5px solid #101211'
                break;
            case 'fairy':
                newPokemon.style.backgroundColor = '#f376a2';
                newPokemon.style.border = '5px solid #a71858'
                break;
            case 'fighting':
                newPokemon.style.backgroundColor = '#e4742c';
                newPokemon.style.border = '5px solid #923418'
                break;
            case 'fire':
                newPokemon.style.backgroundColor = '#fb573b';
                newPokemon.style.border = '5px solid #e92123'
                break;
            case 'grass':
                newPokemon.style.backgroundColor = '#90c786';
                newPokemon.style.border = '5px solid #028543'
                break;
            case 'lightning':
                newPokemon.style.backgroundColor = '#ffe387';
                newPokemon.style.border = '5px solid #ffca06'
                break;
            case 'metal':
                newPokemon.style.backgroundColor = '#bcb3b8';
                newPokemon.style.border = '5px solid #6d6465'
                break;
            case 'psychic':
                newPokemon.style.backgroundColor = '#ba90c2';
                newPokemon.style.border = '5px solid #7552a4'
                break;
            case 'water':
                newPokemon.style.backgroundColor = '#b7e6f8';
                newPokemon.style.border = '5px solid #3392ca'
                break;
        }

    } 
    container.appendChild(newPokemon);

    const pokemonImg = document.createElement('img');
    pokemonImg.src =  `img/${energy}-energy.jpg`;
    pokemonImg.alt = `${energy} energy`;
    newPokemon.appendChild(pokemonImg);

    const pokemonDetails = document.createElement('div');
    pokemonDetails.classList.add('pokemon-details');
    newPokemon.appendChild(pokemonDetails);

    const pokemonName = document.createElement('h3');
    pokemonName.textContent = name;
    pokemonDetails.appendChild(pokemonName);

    const pokemonSet = document.createElement('p');
    pokemonSet.textContent = `- ${set} -`;
    pokemonDetails.appendChild(pokemonSet);

    const pokemonOptions = document.createElement('div');
    pokemonOptions.classList.add('pokemon-details');
    newPokemon.appendChild(pokemonOptions);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'X'
    pokemonOptions.appendChild(removeBtn);

    const statusBtn = document.createElement('button');
    statusBtn.classList.add('status-btn');
    if(available) {
        statusBtn.textContent = 'Available'
    } else {
        statusBtn.textContent = 'Unavailable';
    }
    pokemonOptions.appendChild(statusBtn);

    //Remove Pokemon Card from Collection
    removeBtn.addEventListener('click', () => {
        myCollection.splice(id, 1);
        generatePokemon();
    })

    //Show Pokemon Card as Available / Unavaiable
    statusBtn.addEventListener('click', () => {
        if(myCollection[id].available){
            myCollection[id].available = false;
            newPokemon.classList.remove('available');
            statusBtn.textContent = 'Unavailable';
        } else {
            myCollection[id].available = true;
            newPokemon.classList.add('available');
            statusBtn.textContent = 'Available';
        }
        generatePokemon();
    })

}



// New Pokemon Card Form
addBtn.addEventListener('click', () =>{
    clear();

    if(addBtn.classList.contains('btn-active')){
        addBtn.classList.remove('btn-active');
        generatePokemon();
    } else {
        addBtn.classList.add('btn-active');
        createForm();
    }
})

function createForm() {
    //Create Form Div
    const newDiv = document.createElement('div');
    newDiv.classList.add('form-container');
    workspace.appendChild(newDiv);

    //Div Header
    const header = document.createElement('h3');
    header.textContent = 'Add a new card';
    newDiv.appendChild(header);

    //Form
    const newForm = document.createElement('form');
    newDiv.appendChild(newForm);


    //Pokemon Name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute("for", "pokemon-name");
    nameLabel.textContent = 'Name:';
    newForm.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "pokemon-name");
    nameInput.setAttribute("name", "pokemon-name");
    nameInput.setAttribute("autocomplete", "off");
    newForm.appendChild(nameInput);


    //Pokemon Energy
    const energyLabel = document.createElement('label');
    energyLabel.setAttribute("for", "energy-type");
    energyLabel.textContent = 'Energy Type:';
    newForm.appendChild(energyLabel);

    const energySelect = document.createElement('select');
    energySelect.setAttribute("id", "energy-type");
    energySelect.setAttribute("name", "energy-type");
    newForm.appendChild(energySelect);

    //Energy Types
        //Default
    const defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "default");
    defaultOption.textContent = "-";
    energySelect.appendChild(defaultOption);

        //Colorless
    const colorlessOption = document.createElement("option");
    colorlessOption.setAttribute("value", "colorless");
    colorlessOption.textContent = "Colorless";
    energySelect.appendChild(colorlessOption);

        //Darkness
    const darknessOption = document.createElement("option");
    darknessOption.setAttribute("value", "darkness");
    darknessOption.textContent = "Darkness";
    energySelect.appendChild(darknessOption);

        //Dragon
    const dragonOption = document.createElement("option");
    dragonOption.setAttribute("value", "dragon");
    dragonOption.textContent = "Dragon";
    energySelect.appendChild(dragonOption);

        //Fairy
    const fairyOption = document.createElement("option");
    fairyOption.setAttribute("value", "fairy");
    fairyOption.textContent = "Fairy";
    energySelect.appendChild(fairyOption);
    
        //Fighting
    const fightingOption = document.createElement("option");
    fightingOption.setAttribute("value", "fighting");
    fightingOption.textContent = "Fighting";
    energySelect.appendChild(fightingOption);

        //Fire
    const fireOption = document.createElement("option");
    fireOption.setAttribute("value", "fire");
    fireOption.textContent = "Fire";
    energySelect.appendChild(fireOption);

        //Grass
    const grassOption = document.createElement("option");
    grassOption.setAttribute("value", "grass");
    grassOption.textContent = "Grass";
    energySelect.appendChild(grassOption);

        //Lightning
    const lightningOption = document.createElement("option");
    lightningOption.setAttribute("value", "lightning");
    lightningOption.textContent = "Lightning";
    energySelect.appendChild(lightningOption);

        //Metal
    const metalOption = document.createElement("option");
    metalOption.setAttribute("value", "metal");
    metalOption.textContent = "Metal";
    energySelect.appendChild(metalOption);

        //Psychic
    const psychicOption = document.createElement("option");
    psychicOption.setAttribute("value", "psychic");
    psychicOption.textContent = "Psychic";
    energySelect.appendChild(psychicOption);

        //Water
    const waterOption = document.createElement("option");
    waterOption.setAttribute("value", "water");
    waterOption.textContent = "Water";
    energySelect.appendChild(waterOption);
    

    //Pokemon Set
    const setLabel = document.createElement('label');
    setLabel.setAttribute("for", "pokemon-set");
    setLabel.textContent = 'Pokemon Set:';
    newForm.appendChild(setLabel);

    const setInput = document.createElement('input');
    setInput.setAttribute("type", "text");
    setInput.setAttribute("id", "pokemon-set");
    setInput.setAttribute("name", "pokemon-set");
    setInput.setAttribute("placeholder", "Shining Fates, Vivid Voltage, etc...");
    setInput.setAttribute("autocomplete", "off");
    newForm.appendChild(setInput);

    //Submit Button
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.textContent = "Add to Pokebrary";
    newForm.appendChild(submitBtn);

    //Submit form to add card
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let name = nameInput.value.toLowerCase();
        let energy = energySelect.value
        let set = setInput.value.toLowerCase();

        if(name === ''){
            nameInput.style.border = 'red 2px solid';
        } else {
            nameInput.style.border = 'black 1px solid';
        }

        if(energy === 'default'){
            energySelect.style.border = 'red 2px solid';
        } else {
            energySelect.style.border = 'black 1px solid';
        }

        if(set === ''){
            setInput.style.border = 'red 2px solid';
        } else {
            setInput.style.border = 'black 1px solid';
        }

        if(name !== '' && energy !== 'default' && set !== ''){
            newPokemon(name, energy, set, true);
            addBtn.classList.remove('btn-active');
            generatePokemon();
        }
    })
}

// Clear Workspace
function clear() {
    if(workspace.innerHTML !== ''){
        workspace.innerHTML = '';
    }
}








