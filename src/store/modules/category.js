import * as categoryApi from "@/api/categories";

export const state = {
    categories: null
}

export const mutations = {
    ADD_CATEGORY(state, category) {
        state.categories.push(category)
    },
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },
    SET_CATEGORY(state, category) {
        state.categories = category
    }
}

export const actions = {
    createCategory({ commit, dispatch }, category) {
        return categoryApi.postCategory(category)
            .then(() => {
                commit('ADD_CATEGORY', category)
                const notification = {
                    type: 'success',
                    message: 'New category has been created!'
                }
                dispatch('notification/add', notification, { root: true })
            })

    },
    fetchCategories({ commit }) {
        return categoryApi.getCategories()
            .then(response => {
                commit('SET_CATEGORIES', response.data)
            })
    },
    fetchCategory({ commit, getters }, id) {
        var event = getters.getEventById(id)

        if (event) {
            commit('SET_EVENT', event)
            return event
        } else {
            return categoryApi.getCategory(id)
                .then(response => {
                    commit('SET_CATEGORY', response.data)
                    return response.data
                })
        }
    }
}
export const getters = {
    getEventById: state => id => {
        return state.categories.find(category => category.id === id)
    }
}