console.log("Pokedex Launch")

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://c.tenor.com/uCoZ_h8QmV8AAAAj/angry-pikachu.gif");
        }
        else {
            return res.json();
        }

    }).then((data) => {
        console.log(data);

        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);

        let pokeNames = data.name;
        console.log(pokeNames);

        document.getElementById('pokeNames').innerHTML = pokeNames;

        let type = data.types[0].type.name;
        console.log(type);
        document.getElementById('type').innerHTML = type;

        // let move = data.moves.length;
        for (i = 0; i < data.moves.length; i++) {
            console.log(data.moves[i].move.name)       
            document.getElementById('mov').innerHTML = data.moves[i++].move.name;
        }
       
        
    })
}
//fetchPokemon();

const pokeNombre = document.querySelector('[data-poke-name]');


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

