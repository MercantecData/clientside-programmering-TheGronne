
function getPokemon(){
    var pokeName = document.getElementById("inputField").value;

    var url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}/`;

    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        var picURL = res.sprites.front_default;
        document.getElementById("picture").src = picURL

        document.getElementById("type1").innerText = res.types[0].type.name
        if (res.types.length > 1){
            document.getElementById("type2").innerText = res.types[1].type.name
        }
    })
}