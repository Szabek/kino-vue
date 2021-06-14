import * as movieApi from "@/api/movies";

export const namespaced = true

export const state = {
    movies: [],
    lastPage: 1
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
}