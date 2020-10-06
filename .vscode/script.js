
function getPokemon(){
    var pokeName = document.getElementById("inputField").value;

    var url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}/`;
    var urltype1
    var urltype2
    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        var picURL = res.sprites.front_default;
        document.getElementById("picture").src = picURL

        document.getElementById("type1").innerText = res.types[0].type.name
        urltype1 = `https://pokeapi.co/api/v2/type/${res.types[0].type.name.toLowerCase()}/`;

        if (res.types.length > 1){
            document.getElementById("type2").innerText = res.types[1].type.name
            urltype2 = `https://pokeapi.co/api/v2/type/${res.types[1].type.name.toLowerCase()}/`;
        }


        fetch(urltype1).then(res2 => res2.json()).then(res2 => {
            console.log(res2);
    
            var weaknesses;
            var weaknesses2;

            var resistances;
            var resistances2;

            var immunities;
            var immunities2;
            
            weaknesses = res2.damage_relations.double_damage_from
            resistances = res2.damage_relations.half_damage_from
            immunities = res2.damage_relations.no_damage_from
            console.log(weaknesses)
            fetch(urltype2).then(res3 => res3.json()).then(res3 => {
                console.log(res3);
                
                weaknesses2 = res3.damage_relations.double_damage_from
                resistances2 = res3.damage_relations.half_damage_from
                immunities2 = res3.damage_relations.no_damage_from
                console.log(weaknesses2)
    
            })
            
            
        })
    })

    

    
}

function getPokemon2(){
    var pokeName = document.getElementById("inputField2").value;

    var url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}/`;
    var urltype1
    var urltype2
    fetch(url).then(res => res.json()).then(res => {
        console.log(res);

        var picURL = res.sprites.front_default;
        document.getElementById("picture2").src = picURL
        
        document.getElementById("type12").innerText = res.types[0].type.name
        urltype1 = `https://pokeapi.co/api/v2/type/${res2.types[0].type.name.toLowerCase()}/`;

        if (res.types.length > 1){
            document.getElementById("type22").innerText = res.types[1].type.name
            urltype2 = `https://pokeapi.co/api/v2/type/${res3.types[1].type.name.toLowerCase()}/`;
        }

        var weaknesses;
        var weaknesses2;

        fetch(urltype1).then(res2 => res2.json()).then(res2 => {
            console.log(res2);
    
            
            
            weaknesses = new array(res2.damage_relations.double_damage_from)
            console.log("yo")   
            console.log(weaknesses)
            fetch(urltype2).then(res3 => res3.json()).then(res3 => {
                console.log(res3);
                
                weaknesses2 = new array(res3.damage_relations.double_damage_from)
    
    
            })
            
            
        })
    })

    

    
}