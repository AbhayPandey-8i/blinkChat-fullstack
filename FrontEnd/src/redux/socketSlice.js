import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
    name: "socket",
    initialState: {
        socket: null
    },
    reducers: {
        setSocket: (state, action) => {
            // Don't let Immer proxy the socket object
            state.socket = action.payload
        }
    }
})

export const { setSocket } = socketSlice.actions
export default socketSlice.reducer