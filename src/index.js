import getLocationData from './dataFetch';



function showWeather(placeData, weatherData){
    const tempEl = document.getElementById('temp-heading')
    const locEl = document.getElementById('location')
    const currTime = document.getElementById('date-time')
    const weatherIcon = document.getElementById('weather-icon')
    const weatherDesc =document.getElementById('weather-desc')
    const cloudAmount = document.getElementById('cloudy')
    const humidityAmount = document.getElementById('humidity')
    const windSpeed  = document.getElementById('wind')


    tempEl.textContent = weatherData.temp_c
    locEl.textContent = placeData.name
    currTime.textContent = placeData.localtime
    weatherIcon.setAttribute('src',weatherData.condition.icon)
    weatherDesc.textContent = weatherData.condition.text
    cloudAmount.textContent = `${weatherData.cloud} %`
    humidityAmount.textContent = `${weatherData.humidity} %`
    windSpeed.textContent = `${weatherData.wind_kph} kmh`
    

}
function displayWeather(place){
    getLocationData(place)
        .then( (data) =>{
            const {current,location} = data

            console.log(location)
            console.log(current)
            showWeather(location, current)

    })

}

function getFormData(event){
    event.preventDefault()
    
    const locationData = new FormData(event.target)
    const place = locationData.get('location');
    
    event.target.reset()

    displayWeather(place)

}







(function init(){
    const locationForm = document.querySelector('#search-location')
    locationForm.addEventListener('submit',getFormData)


    displayWeather('Nairobi')


})();




