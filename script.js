
function getCity(){
    var cityName = document.getElementById("inputField").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=415b10abfb32bd431f2017e24a855136&units=metric`;

    var promise = fetch(url);

    var promise2 = promise.then(data=>data.json());
    promise2.then(data=>console.log(data));

    promise2.then(data=>something(data));
}

function getCity2(){
    var cityName = document.getElementById("inputField2").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=415b10abfb32bd431f2017e24a855136&units=metric`;

    var promise = fetch(url);

    var promise2 = promise.then(data=>data.json());
    promise2.then(data=>console.log(data));

    promise2.then(data=>something2(data));
}

function something(data){
    document.getElementById("tempText").innerText = data.main.temp
}

function something2(data){
    document.getElementById("tempText2").innerText = data.main.temp
}