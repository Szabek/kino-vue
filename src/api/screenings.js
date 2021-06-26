import axios from "axios";

export const getScreenings = (page = 1) => axios.get(`/screenings?page=${page}`)
export const getScreening = (screeningId) => axios.get(`/screenings/${screeningId}`)

export const postScreening = (screening) => axios.post('/screenings', screening)
export const updateScreening = (screeningId, data) => axios.put(`/screenings/${screeningId}`, data)
export const deleteScreening = (screeningId) => axios.delete(`/screenings/${screeningId}`)
