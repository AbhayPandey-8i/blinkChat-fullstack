import {configureStore} from "@reduxjs/toolkit"
import useReducer from "./userSlice.js"
import messageReducer from "./messageSlice.js"
import socketReducer from "./socketSlice"

const store = configureStore({
    reducer:{
        user:useReducer,
        message:messageReducer,
        socket:socketReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export default store