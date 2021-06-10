import axios from "axios";
import store from './store/index'

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
        }

        return Promise.reject(error)
    }
)
