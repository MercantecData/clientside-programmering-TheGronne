
function getPokemon(){
    var pokeName = document.getElementById("inputField").value;

    var url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}/`;
    var urltype1
    var urltype2
    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        var picURL = res.sprites.front_default;
        document.getElementById("picture").src = picURL

        document.getElementById("name").innerText = "Name: " + res.species.name

        

        document.getElementById("type1").innerText = "Type 1: " + res.types[0].type.name

        if (res.types.length > 1){
            document.getElementById("type2").innerText = "Type 2: " + res.types[1].type.name
        } else {
            document.getElementById("type2").innerText = ""
        }

        document.getElementById("hp").innerText = "Healh: " + res.stats[0].base_stat
        document.getElementById("attack").innerText = "Attack: " + res.stats[1].base_stat
        document.getElementById("defense").innerText = "Defense: " + res.stats[2].base_stat
        document.getElementById("specialAttack").innerText = "Special Attack: " + res.stats[3].base_stat
        document.getElementById("specialDefense").innerText = "Special Defense: " + res.stats[4].base_stat
        document.getElementById("speed").innerText = "Speed: " + res.stats[5].base_stat
        
    })
}

function capitalize(c){
    return capitalize(c)
}