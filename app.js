const pokeContainer = document.querySelector(`#container`);
const numOfPokemon = 150;

// The created 'createPokeCard' function creates a new card/div and adds the new card webpage/document inside of the 'container' div when we run the function. It will be added to HTML on webpage*/
function createPokeCard(pokemon){
    const pokeCard = document.createElement(`div`);/*creating new element called pokeCard 'div`*/
    pokeCard.classList.add(`pokemon`);//adding class inside function. will need to add class in .css line 30
    pokeContainer.append(pokeCard);//adds class inside pokeContainer div in html
    
    //Setting inner.HTML for new card 'pokeCard' using the data / object that is passed into the 'pokemon' parameter
    //Using .toUpperCase Method to change text to Upper Case when displayed
        //string value HTML with new element we created
     //div inside an HTML file
     pokeCard.innerHTML = `
     <div class="img-container">
       <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}"/>
     </div>
     <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
     `;
   }
   //The 'getPokemonData' function makes an AXIOS.GET request to the PokeAPI using a specific pokemon ID/Number then takes the returned data and passes it into the 'createPokeCard' Function
   async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.name);
    console.log(pokemonData.data.sprites.front_shiny);
    createPokeCard(pokemonData);
  }
  //creates loop to run the pokemon function, create a new card and display on page
  // The getPokemon function loops through all the pokemon IDs and runs/executes the getPokemonData function for each ID
  async function getPokemon(){
    for (i = 1; i <=1; i++){
        await getPokemonData(i);//use await for async function because we want them to display in order
    }
  }
  getPokemon();