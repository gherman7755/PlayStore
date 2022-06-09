import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        games: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getGameStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getGameSuccess: (state, action) => {
            state.isFetching = false;
            state.games = action.payload
        },
        getGameFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        addGameStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addGameSuccess: (state, action) => {
            state.isFetching = false;
            state.games.push(action.payload)
        },
        addGameFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    },
})

export const {getGameSuccess,getGameFailure,getGameStart,addGameFailure, addGameStart, addGameSuccess} = gameSlice.actions;

export default gameSlice.reducer