import axios from "axios";

export const login = (credentials) => axios.post('/api/auth/admin/login', credentials)
export const logout = () => axios.post('api/auth/admin/logout')