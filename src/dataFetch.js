

async function getLocationData(location){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=db7ecc708d1445e0bcb181848230308&q=${location}`,{mode: 'cors'})
    const data = await response.json()
    return data
}




export default getLocationData