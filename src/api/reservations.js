import axios from "axios";

export const getReservation = (reservationUuid) => axios.get(`/reservations/${reservationUuid}`)
export const postReservation = (reservation) => axios.post('/reservations', reservation)
