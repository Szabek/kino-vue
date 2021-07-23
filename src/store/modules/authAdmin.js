import axios from "axios";
import {login, logout} from "@/api/adminAuth";
export const namespaced = true

export const state = {
    admin: null
}

export const mutations = {
    SET_ADMIN_DATA(state, adminData) {
        state.admin = adminData
        localStorage.setItem('admin', JSON.stringify(adminData))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
            adminData.token
        }`
    },
    CLEAR_ADMIN_DATA() {
        localStorage.removeItem('admin')
        location.reload()
    }
}

export const actions = {
    async login({commit}, credentials) {
        return login(credentials)
            .then(({data}) => {
                commit('SET_ADMIN_DATA', data)
            })
    },
    async logout({commit}) {
        return logout()
            .then(commit('CLEAR_ADMIN_DATA'))
    }
}

export const getters = {
    loggedIn(state) {
        return !!state.admin
    }
}


