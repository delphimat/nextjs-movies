import axios from 'axios'

const BASE_URL = "http://localhost:3000"

const MOVIE_DATA = []

const CATEGORY_DATA = [
    {id: '1', name: 'drama'},
    {id: '2', name: 'action'},
    {id: '3', name: 'adventure'},
    {id: '4', name: 'historical'},
]


export  const  getMovies = () => {
    // Create async
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data)
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
        }, 100)
    })
}

export const getMovieById = (id) => {

    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}


export  const  createMovie = (movie) => {
    // Create async
    movie.id = Math.random().toString(36).substr(2,5)
    return axios.post(`${BASE_URL}/api/v1/movies/`, movie).then(res => res.data)
}

export  const  deleteMovie = (id) => {
    // Create async
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
}