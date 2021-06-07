const toggleBtn = document.querySelector('.toggle-btn');
const pokedex = document.querySelector('.pokedex');
const pokemonList = document.querySelector('.pokemon-list');
const pokedexContainer = document.querySelector('.pokedex-container');
const pokemonListContainer = document.querySelector('.pokemon-list-container');

//Toggle between Pokedex and Pokemon List
toggleBtn.addEventListener('click', () => {
    if(pokedex.classList.contains('visible')){
        pokedex.classList.remove('visible');
        pokemonList.classList.add('visible');
        toggleBtn.innerHTML = 'Search';
    } else if (pokemonList.classList.contains('visible')) {
        pokemonList.classList.remove('visible');
        pokedex.classList.add('visible');
        toggleBtn.innerHTML = 'List';
    }
})

async function fetchAPI(url) {
    const dataFetch = await fetch(url, {
        method: 'GET', 
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await dataFetch.json();
    return data;
};

//Generate Pokedex Info
async function generatePokedex(pokemon){
    let pokemonInfo = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let morePokemonInfo = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
    let main = await fetchAPI(pokemonInfo);
    let secondary = await fetchAPI(morePokemonInfo)
    
    pokedexEntry(main, secondary);
}

// Generate Pokemon List
async function generatePokemonList(){
    for(let i = 1; i <= 151; i++){
        let fetchLink = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let data = await fetchAPI(fetchLink);
        pokemonListEntry(data);
    }
}

// Pokedex Search
function search() {
    const searchBtn = document.querySelector('.search-btn');
    const input = document.querySelector('.search-input');

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let search = input.value.toLowerCase();
        if(search > 151) {
            error();
        } else {
            generatePokedex(search);
        }

        input.value = '';
    })
}


//Pokedex Error 
function error() {
    clear();
    const errorImg = document.createElement('img');
    errorImg.src = 'img/surprised-pikachu.png';
    errorImg.alt = 'Surprised Pikachu';
    pokedexContainer.appendChild(errorImg);

    const errorHeader = document.createElement('h2');
    errorHeader.textContent = 'Whaaaaaaaaaaaaa?!';
    pokedexContainer.appendChild(errorHeader);

    const errorDescription = document.createElement('p');
    errorDescription.classList.add('description');
    errorDescription.textContent = `This search cannot be found - please double check your spelling and try again.`;
    pokedexContainer.appendChild(errorDescription);
}

//Create Pokedex Entry
function pokedexEntry(a, b){
    clear();
    
    const pokemonImg = document.createElement('img');
    pokemonImg.src = a.sprites.other["official-artwork"].front_default;
    pokedexContainer.appendChild(pokemonImg);

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = a.name;
    pokedexContainer.appendChild(pokemonName);

    const pokemonAltName = document.createElement('h2');
    pokemonAltName.textContent = b.names[0].name;
    pokedexContainer.appendChild(pokemonAltName);

    const pokemonNumber = document.createElement('h4');
    pokemonNumber.textContent = `${a.id} | 151`;
    pokedexContainer.appendChild(pokemonNumber);

    const pokemonDescription = document.createElement('p');
    pokemonDescription.classList.add('description');
    pokemonDescription.textContent = b.flavor_text_entries[2].flavor_text;
    pokedexContainer.appendChild(pokemonDescription);

    const attributes = document.createElement('div');
    attributes.classList.add('attributes');
    pokedexContainer.appendChild(attributes);

    const type = document.createElement('p');
    type.classList.add('attribute');
    type.classList.add('type');
    type.textContent = `Type: ${a.types[0].type.name}`;
    attributes.appendChild(type);

    const hp = document.createElement('p');
    hp.classList.add('attribute');
    hp.classList.add('hp');
    hp.textContent = `Base HP: ${a.stats[0].base_stat}`;
    attributes.appendChild(hp);

    const attack = document.createElement('p');
    attack.classList.add('attribute');
    attack.classList.add('attack');
    attack.textContent = `Base Attack: ${a.stats[1].base_stat}`;
    attributes.appendChild(attack);

    const specialAttack = document.createElement('p');
    specialAttack.classList.add('attribute');
    specialAttack.classList.add('special-attack');
    specialAttack.textContent = `Special Attack: ${a.stats[3].base_stat}`;
    attributes.appendChild(specialAttack);

    const defense = document.createElement('p');
    defense.classList.add('attribute');
    defense.classList.add('defense');
    defense.textContent = `Base Defense: ${a.stats[2].base_stat}`;
    attributes.appendChild(defense);

    const specialDefense = document.createElement('p');
    specialDefense.classList.add('attribute');
    specialDefense.classList.add('special-defense');
    specialDefense.textContent = `Special Defense: ${a.stats[4].base_stat}`;
    attributes.appendChild(specialDefense);
};


//Create Pokemon in Pokemon List
function pokemonListEntry(pokemon){
    const newPokemon = document.createElement('div');
    newPokemon.classList.add('pokemon');
    pokemonListContainer.appendChild(newPokemon);

    const pokemonImg = document.createElement('img');
    pokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
    pokemonImg.alt = pokemon.name;
    newPokemon.appendChild(pokemonImg)

    const pokemonName = document.createElement('p');
    pokemonName.textContent = pokemon.name;
    newPokemon.appendChild(pokemonName);

    newPokemon.addEventListener('click', ()=> {
        generatePokedex(pokemon.id);
        if(pokemonList.classList.contains('visible')){
            pokemonList.classList.remove('visible');
            pokedex.classList.add('visible');
        }
    })
}


//Clear Pokedex Info
function clear() {
    if(pokedexContainer.innerHTML !== '') {
        pokedexContainer.innerHTML = '';
    }
}

search();
generatePokemonList();
generatePokedex(Math.floor(Math.random() * 151 + 1));