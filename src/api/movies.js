import axios from "axios";

export const getMovies = (page = 1) => axios.get('/movies?page=' + page)
export const getMovie = (movieId) => axios.get('/movies/' + movieId)

export const postMovie = (movie) => axios.post('/movies', movie)
export const updateMovie = (movie) => axios.put('/movies/' + movie.id, movie)
export const deleteMovie = (movieId) => axios.delete('/movies/' + movieId)