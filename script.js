const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const searchButton = document.querySelector('.searchbutton')
const searchBox =  document.getElementById('searchbox')
const weatherIcon = document.querySelector('.weather-icon')


async function search(city)
{

    const response = await fetch(apiUrl+city+"&units=metric&appid=" + apiKey);
    const data = await response.json()  
    if (data.cod == "200") {
        console.log(data);
        
        document.querySelector('.error').style.display = 'none'

        document.querySelector('.temp').innerHTML = data.main.temp +"°C"
        document.querySelector('.city').innerHTML = data.name 
        document.querySelector('.windspeed').innerHTML = data.wind.speed +"km/h"
        document.querySelector('.humidity').innerHTML = data.main.humidity +"%"
        
        console.log(data.weather[0].main);
        if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Wind") {
            weatherIcon.src = "images/wind.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Wind") {
            weatherIcon.src = "images/wind.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        document.querySelector('.weather').style.display = 'flex'

    }
    else
    {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }
}

searchButton.addEventListener('click',()=>{
    
    search(searchBox.value)
})