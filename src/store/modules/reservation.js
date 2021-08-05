import * as reservationApi from '@/api/reservations'

export const namespaced = true

export const state = {
    reservations: [],
}

export const mutations = {
    ADD_RESERVATION(state, reservation) {
        state.reservations.unshift(reservation)
    },
    SET_RESERVATIONS(state, reservations) {
        state.reservations = reservations
    },
}

export const actions = {
    createReservations({commit}, {reservation}) {
        return reservationApi.postReservation(reservation)
            .then(response => {
                commit('ADD_RESERVATION', response.data.data)
            })
    },
    fetchReservations({commit}) {
        return reservationApi.getReservations()
            .then(response => {
                commit('SET_RESERVATIONS', response.data.data)
            })
    },

}


