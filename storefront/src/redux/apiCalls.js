import { loginFailure, loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess } from "./userSlice";
import { publicRequest, userRequest } from "../requestsMethods"
import {addGameStart, addGameSuccess, addGameFailure, getGameStart, getGameFailure, getGameSuccess} from "../redux/gameRedux"
import {addUserFailure, addUserStart, addUserSuccess} from "./registerUserRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

// export const logout = async (dispatch, user) => {
//     dispatch(logoutStart());
//     try{
//         const res = await userRequest.get("/auth/logout")
//         dispatch(logoutSuccess())
//     } catch (err){
//         dispatch(logoutFailure())
//     }
// }

export const create = async (dispatch, game) => {
    // console.log(game)
    dispatch(addGameStart());
    try{
        const res = await userRequest.post("/games/", game)
        dispatch(addGameSuccess(res.data))
    } catch(err){
        dispatch(addGameFailure());
    }
}


export const getGames = async (dispatch) => {
    dispatch(getGameStart());
    try{
        const res = await publicRequest.get("/games");
        dispatch(getGameSuccess(res.data))
    } catch(err){
        dispatch(getGameFailure());
    }
}

export const register = async(dispatch, user) => {
    dispatch(addUserStart());
    try{
        const res = await publicRequest.post("/auth/register", user)
        dispatch(addUserSuccess(res.data))
    } catch (err){
        dispatch(addUserFailure());
    }
}