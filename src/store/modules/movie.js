import * as movieApi from "@/api/movies";

export const namespaced = true

export const state = {
    movies: []
}

export const mutations = {
    ADD_MOVIE(state, movie) {
        state.movies.unshift(movie)
    },
    SET_MOVIES(state, movies) {
        state.movies = movies
    },

}

export const actions = {
    createMovie({commit}, movie) {
        return movieApi.postMovie(movie)
            .then(response => {
                commit('ADD_MOVIE', response.data.data)
            })
    },
    fetchMovies({commit}) {
        return movieApi.getMovies()
            .then(response => {
                commit('SET_MOVIES', response.data.data)
            })
    },
}