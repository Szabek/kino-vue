import axios from "axios";

export const login = (credentials) => axios.post('/auth/admin/login', credentials)
export const logout = () => axios.post('/auth/admin/logout')