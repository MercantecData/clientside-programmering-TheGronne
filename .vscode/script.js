function getPokemon() {

    var pokeName = document.getElementById("inputField").value;

    var url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}/`;
    var urltype1
    var urltype2

    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        //Pokemon Picture
        var picURL = res.sprites.front_default;
        document.getElementById("picture").src = picURL

        //Pokemon Name
        var name = res.species.name
        document.getElementById("name").innerText = "Name: " + name


        //Pokemon Type 1
        var idk = document.getElementById("type1")

        var newLabel = document.createElement("label")
        var typeName = res.types[0].type.name
        newLabel.innerHTML = "Type 1: " + typeName

        switch (res.types[0].type.name) {
            case "psychic":
                newLabel.setAttribute('class', 'psychic')
                document.getElementById("name").setAttribute('class','psychic')
                break;
            case "ghost":
                newLabel.setAttribute('class', 'ghost')
                document.getElementById("name").setAttribute('class','ghost')
                break;
            case "dark":
                newLabel.setAttribute('class', 'dark')
                document.getElementById("name").setAttribute('class','dark')
                break;
            case "fairy":
                newLabel.setAttribute('class', 'fairy')
                document.getElementById("name").setAttribute('class','fairy')
                break;
            case "dragon":
                newLabel.setAttribute('class', 'dragon')
                document.getElementById("name").setAttribute('class','dragon')
                break;
            case "steel":
                newLabel.setAttribute('class', 'steel')
                document.getElementById("name").setAttribute('class','steel')
                break;
            case "rock":
                newLabel.setAttribute('class', 'rock')
                document.getElementById("name").setAttribute('class','rock')
                break;
            case "ground":
                newLabel.setAttribute('class', 'ground')
                document.getElementById("name").setAttribute('class','ground')
                break;
            case "flying":
                newLabel.setAttribute('class', 'flying')
                document.getElementById("name").setAttribute('class','flying')
                break;
            case "electric":
                newLabel.setAttribute('class', 'electric')
                document.getElementById("name").setAttribute('class','electric')
                break;
            case "water":
                newLabel.setAttribute('class', 'water')
                document.getElementById("name").setAttribute('class','water')
                break;
            case "fire":
                newLabel.setAttribute('class', 'fire')
                document.getElementById("name").setAttribute('class','fire')
                break;
            case "grass":
                newLabel.setAttribute('class', 'grass')
                document.getElementById("name").setAttribute('class','grass')
                break;
            case "normal":
                newLabel.setAttribute('class', 'normal')
                document.getElementById("name").setAttribute('class','normal')
                break;
            case "fighting":
                newLabel.setAttribute('class', 'fighting')
                document.getElementById("name").setAttribute('class','fighting')
                break;
            case "poison":
                newLabel.setAttribute('class', 'poison')
                document.getElementById("name").setAttribute('class','poison')
                break;
            case "ice":
                newLabel.setAttribute('class', 'ice')
                document.getElementById("name").setAttribute('class','ice')
                break;
            case "bug":
                newLabel.setAttribute('class', 'bug')
                document.getElementById("name").setAttribute('class','bug')
                break;
        }
        idk.innerHTML = "";
        idk.appendChild(newLabel)

        //Pokemon Type 2
        if (res.types.length == 2) {
            var idk2 = document.getElementById("type2")

            var newLabel2 = document.createElement("label")
            newLabel2.innerHTML = "Type 2: " + res.types[1].type.name

            switch (res.types[1].type.name) {
                case "psychic":
                    newLabel2.setAttribute('class', 'psychic')
                    break;
                case "ghost":
                    newLabel2.setAttribute('class', 'ghost')
                    break;
                case "dark":
                    newLabel2.setAttribute('class', 'dark')
                    break;
                case "fairy":
                    newLabel2.setAttribute('class', 'fairy')
                    break;
                case "dragon":
                    newLabel2.setAttribute('class', 'dragon')
                    break;
                case "steel":
                    newLabel2.setAttribute('class', 'steel')
                    break;
                case "rock":
                    newLabel2.setAttribute('class', 'rock')
                    break;
                case "ground":
                    newLabel2.setAttribute('class', 'ground')
                    break;
                case "flying":
                    newLabel2.setAttribute('class', 'flying')
                    break;
                case "electric":
                    newLabel2.setAttribute('class', 'electric')
                    break;
                case "water":
                    newLabel2.setAttribute('class', 'water')
                    break;
                case "fire":
                    newLabel2.setAttribute('class', 'fire')
                    break;
                case "grass":
                    newLabel2.setAttribute('class', 'grass')
                    break;
                case "normal":
                    newLabel2.setAttribute('class', 'normal')
                    break;
                case "fighting":
                    newLabel2.setAttribute('class', 'fighting')
                    break;
                case "poison":
                    newLabel2.setAttribute('class', 'poison')
                    break;
                case "ice":
                    newLabel2.setAttribute('class', 'ice')
                    break;
                case "bug":
                    newLabel2.setAttribute('class', 'bug')
                    break;
            }
            idk2.innerHTML = "";
            idk2.appendChild(newLabel2)
        }
        else {
            document.getElementById("type2").innerHTML = ""
        }

        //Pokemon Stats
        document.getElementById("hp").innerText = "Healh: " + res.stats[0].base_stat
        document.getElementById("attack").innerText = "Attack: " + res.stats[1].base_stat
        document.getElementById("defense").innerText = "Defense: " + res.stats[2].base_stat
        document.getElementById("specialAttack").innerText = "Special Attack: " + res.stats[3].base_stat
        document.getElementById("specialDefense").innerText = "Special Defense: " + res.stats[4].base_stat
        document.getElementById("speed").innerText = "Speed: " + res.stats[5].base_stat

    })

}