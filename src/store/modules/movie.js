import * as movieApi from "@/api/movies";

export const namespaced = true

export const state = {
    movies: [],
    lastPage: 1,
    movieToEdit: {}
}

export const mutations = {
    ADD_MOVIE(state, movie) {
        state.movies.unshift(movie)
    },
    SET_MOVIES(state, movies) {
        state.movies = movies
    },
    SET_MOVIES_LAST_PAGE(state, lastPage) {
        state.lastPage = lastPage
    },
    SET_MOVIE_TO_EDIT(state, movie) {
        state.movieToEdit = movie
    },
    UPDATE_MOVIE(state, newMovie) {
        const movie = state.movies.find(oldMovie => oldMovie.id === newMovie.id)
        state.movies[movie] = newMovie                                                      //TODO
    },
    DELETE_MOVIE(state, id) {
        const index = state.movies.findIndex(movie => movie.id === id)
        state.movies.splice(index, 1)
    }
}

export const actions = {
    createMovie({commit}, movie) {
        return movieApi.postMovie(movie)
            .then(response => {
                commit('ADD_MOVIE', response.data.data)
            })
    },
    fetchMovies({commit}, {page}) {
        return movieApi.getMovies(page)
            .then(response => {
                commit('SET_MOVIES', response.data.data)
                commit('SET_MOVIES_LAST_PAGE', response.data.meta.last_page)
            })
    },
    fetchMovieToEdit({commit}, id) {
        return movieApi.getMovie(id)
            .then(response => {
                commit('SET_MOVIE_TO_EDIT', response.data.data)
            })
    },
    updateMovie({commit}, {id, updatedMovie}) {

        return movieApi.updateMovie(id, updatedMovie)
            .then(response => {
                commit('UPDATE_MOVIE', response.data.data)
                console.log(response.data)
            })
    },
    deleteMovie({commit, getters}, movieId) {
        const movieToDelete = getters.getMovieById(movieId)

        if (movieToDelete) {
            return movieApi.deleteMovie(movieId)
                .then(commit('DELETE_MOVIE', movieId))
                .catch(error => {
                    console.log(error);
                })
        }

    }

}
export const getters = {
    getMovieById: state => id => {
        return state.movies.find(movie => movie.id === id)
    }
}