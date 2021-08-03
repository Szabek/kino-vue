import Vue from 'vue'
import Vuex from 'vuex'
import * as authAdmin from '@/store/modules/authAdmin'
import * as authUser from '@/store/modules/authUser'
import * as category from '@/store/modules/category'
import * as movie from '@/store/modules/movie'
import * as room from '@/store/modules/room'
import * as screening from '@/store/modules/screening'
import * as reservation from  '@/store/modules/reservation'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        authAdmin,
        authUser,
        category,
        movie,
        room,
        screening,
        reservation
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

