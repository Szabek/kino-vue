import axios from "axios";
import store from './store/index'
import router from "@/router";

axios.defaults.baseURL = 'http://localhost:8000/api';

axios.interceptors.request.use(function (config) {
    const adminString = localStorage.getItem('admin');
    adminString ? config.headers.common['Authorization'] = 'Bearer ' + JSON.parse(adminString).access_token : false;

    return config
})

axios.interceptors.response.use(
    response => response,
    error => {
        switch (error.response.status) {
            case 401:
                store.dispatch('authAdmin/logout')
                break;
            case 404:
                router.push({name: 'Page404'})
                break;
            case 500:
                router.push({name: 'Page500'})
                break;
        }

        return Promise.reject(error)
    }
)
