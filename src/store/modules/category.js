import * as categoryApi from "@/api/categories";

export const namespaced = true

export const state = {
    categories: []
}

export const mutations = {
    ADD_CATEGORY(state, category) {
        state.categories.unshift(category)
    },
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },
    UPDATE_CATEGORY(state, newCategory) {
        const category = state.categories.find(oldCategory => oldCategory.id === newCategory.id)
        category.name = newCategory.name
    }
}

export const actions = {
    createCategory({commit}, category) {
        return categoryApi.postCategory(category)
            .then(response => {
                commit('ADD_CATEGORY', response.data.data)
            })

    },
    fetchCategories({commit}, page) {
        return categoryApi.getCategories(page)
            .then(response => {
                commit('SET_CATEGORIES', response.data.data)
            })
    },
    updateCategory({commit, getters}, updatedCategory) {
        const categoryToUpdate = getters.getCategoryById(updatedCategory.id)

        if (categoryToUpdate) {
            return categoryApi.updateCategory(updatedCategory)
                .then(response => {
                    commit('UPDATE_CATEGORY', response.data.data)
                })
        }
    }
}
export const getters = {
    getCategoryById: state => id => {
        return state.categories.find(category => category.id === id)
    }
}