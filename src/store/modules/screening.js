import * as screeningApi from '@/api/screenings'

export const namespaced = true

export const state = {
    screenings: [],
    lastPage: 1
}

export const mutations = {
    ADD_SCREENING(state, screening) {
        state.screenings.unshift(screening)
    },
    SET_SCREENINGS(state, screenings) {
        state.screenings = screenings
    },
    SET_SCREENINGS_LAST_PAGE(state, lastPage) {
        state.lastPage = lastPage
    },
}

export const actions = {
    createScreening({commit}, screening) {
        return screeningApi.postScreening(screening)
            .then(response => {
                commit('ADD_SCREENING', response.data.data)
            })
    },
    fetchScreenings({commit}, {page}) {
        return screeningApi.getScreenings(page)
            .then(response => {
                commit('SET_SCREENINGS', response.data.data)
                commit('SET_SCREENINGS_LAST_PAGE', response.data.meta.last_page)
            })
    },
}