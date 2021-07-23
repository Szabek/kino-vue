import 'core-js/stable'
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store/index'
import CoreuiVue from '@coreui/vue'
import './axiosDefaults'
import {iconsSet as icons} from './assets/icons/icons.js'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate'


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
        App
    },
    created() {
        const adminString = localStorage.getItem('admin')
        const userString = localStorage.getItem('user')
        if (adminString) {
            const adminData = JSON.parse(adminString)
            this.$store.commit('authAdmin/SET_ADMIN_DATA', adminData)
        }
        if (userString) {
            const userData = JSON.parse(userString)
            this.$store.commit('authUser/SET_USER_DATA', userData)
        }
    },
    render: h => h(App)
}).$mount('#app')
