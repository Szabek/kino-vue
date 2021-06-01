import axios from "axios";

export const state = {
    user: null
}

export const mutations = {
    SET_USER_DATA (state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
            userData.token
        }`
    },
    CLEAR_USER_DATA () {
        localStorage.removeItem('user')
        location.reload()
    }
}

export const actions = {
    login ({ commit }, credentials) {
        return axios
            .post('//localhost:8000/api/adminAuth/login', credentials)
            .then(({ data }) => {
                commit('SET_USER_DATA', data)
            })
    },
    logout ({ commit }) {
        return axios
            .post('//localhost:8000/api/adminAuth/logout')
            .then(commit('CLEAR_USER_DATA'))
    }
}

export const getters = {
    loggedIn (state) {
        return !!state.user
    }
}


