const ulList = document.querySelector("ul");
fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
.then((response) => response.json())
.then((data) => {
    console.log("ontvangen data:", data);

    const pokemons = data.results;
    for (let i = 0; i < pokemons.length; i++) {
        const p = pokemons[i];
        ulList.innerHTML += `<li>${p.name}</li>`;
    }
});