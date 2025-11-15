const API_KEY = '8bc60b29ddc58dc37deac755c3ad0353';

const BASE_URL = 'https://api.themoviedb.org/3'; 
const imageBaseURL = 'https://image.tmdb.org/t/p/w500'
const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`
const root = document.getElementById('root')

const obtenerdatosAPI = async() => {
    const response = await fetch(url)
  
    const datos = await response.json()
   
    datos.results.forEach(element => {
        const poster = document.createElement('img')
        const title = document.createElement('h2')
        const overview = document.createElement('p')

        poster.src = `${imageBaseURL}${element.poster_path}`
        title.textContent = `${element.title}`
        overview.textContent = `${element.overview}`

        
        root.appendChild(poster)
        root.appendChild(title)
        root.appendChild(overview)
    
    })
}

obtenerdatosAPI()




//console.log(url)
//console.log(root)

//console.log(API_KEY)
//console.log(BASE_URL)
//console.log(imageBaseURL)

