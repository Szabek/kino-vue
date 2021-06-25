import axios from "axios";

export const getMovies = (page = 1) => axios.get('/movies?page=' + page)
export const getMovie = (movieId) => axios.get('/movies/' + movieId)

export const postMovie = (movie) => axios.post('/movies', movie)
export const updateMovie = (movieId, data) => axios.post('/movies/' + movieId + '?_method=PUT', data)
export const deleteMovie = (movieId) => axios.delete('/movies/' + movieId)