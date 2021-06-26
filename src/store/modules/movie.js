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
        state.movies[movie] = newMovie                                                      //TODO ten sposób nie diziała
    },
    DELETE_MOVIE(state, id) {
        const index = state.movies.findIndex(movie => movie.id === id)
        state.movies.splice(index, 1)
    }
}

export const actions = {
    createMovie({commit}, movie) {
        const formData = createFormData(movie)

        return movieApi.postMovie(formData)
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
        const formData = createFormData(updatedMovie)

        return movieApi.updateMovie(id, formData)
            .then(response => {
                commit('UPDATE_MOVIE', response.data.data)
            })
    },
    deleteMovie({commit}, movieId) {
        return movieApi.deleteMovie(movieId)
            .then(commit('DELETE_MOVIE', movieId))

    }
}

function createFormData(movie) {
    const formData = new FormData();
    formData.append('title', movie.title)
    formData.append('category_id', movie.category_id)
    formData.append('author', movie.author)
    formData.append('description', movie.description)
    formData.append('trailer', movie.trailer)
    formData.append('release_date', movie.release_date)
    if (movie.picture) {
        formData.append('picture', movie.picture, movie.picture.name)
    }
    return formData
}


