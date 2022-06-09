import {createSlice} from "@reduxjs/toolkit"

const registerUserSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
    addUserStart: (state) => {
        state.isFetching = true;
        state.error = false;
    },
    addUserSuccess: (state, action) => {
        state.isFetching = false;
        state.users.push(action.payload)
    },
    addUserFailure: (state) => {
        state.isFetching = false;
        state.error = true;
    }
}})

export const {addUserSuccess, addUserFailure, addUserStart} = registerUserSlice.actions;
export default registerUserSlice.reducer;