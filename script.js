
function getCity(){
    var cityName = document.getElementById("inputField").value
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b10abfb32bd431f2017e24a855136&units=metric`

    var promise = fetch(url)

    var promise2 = promise.then(data=>data.json())
    promise2.then(data=>console.log(data))

    promise2.then(data=>console.log(data.main.temp))

    
}