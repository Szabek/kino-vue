import axios from "axios";
import store from './store/index'
import router from "@/router";

axios.defaults.baseURL = 'http://localhost:8000/api';

axios.interceptors.request.use(function (config) {
    const userString = localStorage.getItem('user');
    userString ? config.headers.common['Authorization'] = 'Bearer ' + JSON.parse(userString).access_token : false;

    return config
})

axios.interceptors.response.use(
    response => response,
    error => {
        switch (error.response.status) {
            case 401:
                store.dispatch('auth/logout')
                break;
            case 404:
                router.push({name: 'page404'})
                break;
            case 500:
                router.push({name: 'page500'})
                break;
        }

        return Promise.reject(error)
    }
)
