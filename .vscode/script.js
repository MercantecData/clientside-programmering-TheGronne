
function getCity(){
    var cityName = document.getElementById("inputField").value;
    var apiKey = '415b10abfb32bd431f2017e24a855136'

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    var promise = fetch(url);


    promise2.then(data=>something(data));



    var url2 = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

    var hourlyPromise = fetch(url2);

    var hourlyPromise2 = hourlyPromise.then(data2=>data2.json());
    hourlyPromise2.then(data2=>console.log(data2));

    hourlyPromise2.then(data2=>something2(data2));
    
    
}
function something(data){
    document.getElementById('header').innerText = 'Monday'
    document.getElementById("tempText2").innerText = data.main.temp
    document.getElementById("weatherText2").innerText = data.weather[0].main
    document.getElementById("countryText2").innerText = data.sys.country
}

function something2(data2){
    var idk = document.getElementById('form')
    for (var i = 0; i < data2.list.length; i++)
    {
        listItem = document.createElement('h1')
        listItem.innerText = data2.list[i].dt_txt

        idk.appendChild(listItem)
    }
}