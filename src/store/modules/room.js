import * as roomApi from "@/api/rooms";

export const namespaced = true

export const state = {
    rooms: [],
}

export const mutations = {
    ADD_ROOM(state, room) {
        state.rooms.unshift(room)
    },
    SET_ROOMS(state, rooms) {
        state.rooms = rooms
    },
    UPDATE_ROOM(state, newRoom) {
        const room = state.rooms.find(oldRoom => oldRoom.id === newRoom.id)
        room.name = newRoom.name
        room.seats = newRoom.seats
    },
    DELETE_ROOM(state, id){
        const index = state.rooms.findIndex(room => room.id === id)
        state.rooms.splice(index, 1)
    }
}

export const actions = {
    createRoom({commit}, room) {
        return roomApi.postRoom(room)
            .then(response => {
                commit('ADD_ROOM', response.data.data)
            })
    },
    fetchRooms({commit}) {
        return roomApi.getRooms()
            .then(response => {
                commit('SET_ROOMS', response.data.data)
            })
    },
    updateRoom({commit, getters}, updatedRoom) {
        const roomToUpdate = getters.getRoomById(updatedRoom.id)

        if (roomToUpdate) {
            return roomApi.updateRoom(updatedRoom.id, updatedRoom)
                .then(response => {
                    commit('UPDATE_ROOM', response.data.data)
                })
        }
    },
    deleteRoom({commit, getters}, roomId) {
        const roomToDelete = getters.getRoomById(roomId)

        if (roomToDelete) {
            return roomApi.deleteRoom(roomId)
                .then(commit('DELETE_ROOM', roomId))
                .catch(error => {
                    console.log(error);
                })
        }

    }
}

export const getters = {
    getRoomById: state => id => {
        return state.rooms.find(room => room.id === id)
    }
}