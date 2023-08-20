import getLocationData from './dataFetch';



function displayWeather(event){
    event.preventDefault()
    
    const locationData = new FormData(event.target)
    const location = locationData.get('location');

    getLocationData(location)
    .then( (data) => data)

}

(function init(){
    const locationForm = document.querySelector('#search-location')
    locationForm.addEventListener('submit',displayWeather)





})();




