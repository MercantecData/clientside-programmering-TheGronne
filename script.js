var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=415b10abfb32bd431f2017e24a855136"

var promise = fetch(url)

var promise2 = promise.then(data=>data.text())
promise2.then(data=>console.log(data))