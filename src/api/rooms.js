import axios from "axios";

export const getRooms = () => axios.get('/rooms')
export const getRoom = (roomId) => axios.get('/rooms/' + roomId)

export const postRoom = (room) => axios.post('/rooms', room)
export const updateRoom = (roomId, data) => axios.put('/rooms/' + roomId, data)
export const deleteRoom = (roomId) => axios.delete('/rooms/' + roomId)
