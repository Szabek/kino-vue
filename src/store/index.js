import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/store/modules/auth'
import * as category from '@/store/modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        category
    },

    state: {
        sidebarShow: 'responsive',
        sidebarMinimize: false,
    },

    mutations: {
        toggleSidebarDesktop(state) {
            const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
            state.sidebarShow = sidebarOpened ? false : 'responsive'
        },
        toggleSidebarMobile(state) {
            const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
            state.sidebarShow = sidebarClosed ? true : 'responsive'
        },
        set(state, [variable, value]) {
            state[variable] = value
        }
    }

})

