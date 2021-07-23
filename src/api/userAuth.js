import axios from "axios";

export const login = (credentials) => axios.post('/auth/user/login', credentials)
export const register = (credentials) => axios.post('/auth/user/register', credentials)
export const logout = () => axios.post('/auth/user/logout')
