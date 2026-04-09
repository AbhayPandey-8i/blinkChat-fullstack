import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authUser: JSON.parse(localStorage.getItem("user")) || null,
        otherUsers:null,
        selectedUser:null,
    },

    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser = action.payload

            if (action.payload) {
                localStorage.setItem("user", JSON.stringify(action.payload))
            } else {
                localStorage.removeItem("user")
            }
        },

        setOtherUsers:(state,action)=>{
            state.otherUsers = action.payload
        },
        setSelectedUser:(state, action)=>{
            state.selectedUser = action.payload
        }
    }
})

export const {setAuthUser, setOtherUsers, setSelectedUser} = userSlice.actions;
export default userSlice.reducer;