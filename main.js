const ulList = document.querySelector("ul");
const pokediv = document.querySelector(".gens");
const pokecheri = document.querySelector(".cherries");

fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
.then((response) => response.json())
.then((data) => {
    console.log("ontvangen data:", data);

    const pokemons = data.results;
    for (let i = 0; i < pokemons.length; i++) {
        const p = pokemons[i];
        ulList.innerHTML += `<li>${p.name}</li>`;
    }
});

fetch("https://pokeapi.co/api/v2/generation/?limit=10")
.then((response) => response.json())
.then((data) => {
    console.log("ontvangen tweede data:", data);

    const pokegames = data.results;
    for (let i = 0; i < pokegames.length; i++) {
        const g = pokegames[i];
        pokediv.innerHTML += `<li>${g.name}</li>`
    }
});

fetch("https://pokeapi.co/api/v2/berry/?limit=20")
.then((response) => response.json())
.then((data) => {
    console.log("Ontvangen derde data:", data);

    const pokecherries = data.results;
    for (let i = 0; i < pokecherries.length; i++) {
        const ch = pokecherries[i];

        pokecheri.innerHTML += `<li>${ch.name}</li>`
    }
})