import axios from "axios";
import AuthServices from "../../services/authorization/AuthServices";
import {AuthResponse} from "../../interfaces/authotization/AuthResponse";
import {BASE_URL} from "../../api/authorization/axios";

export type ActionsType = SetUserType & LogOutType & LogInType & SetLoadingType;

type SetUserType = {
    type: string,
    payload: any
};
type LogInType = {
    type: string,
    payload: any
};
type LogOutType = {
    type: string
};
type SetLoadingType = {
    type: string
};

export const SET_USER = 'SIGN-UP';
export const LOG_IN = 'LOG-IN';
export const LOG_OUT = 'LOG-OUT';
export const SET_LOADING = 'SET-LOADING';
export const UNSET_LOADING = 'UNSET-LOADING';

const setUser = (user: any): SetUserType => {
    return { type: SET_USER, payload: user };
};
const logIn = (user: any): LogInType => {
    return { type: LOG_IN, payload: user };
};
const logOut = (): LogOutType => {
    return { type: LOG_OUT };
};
const setLoading = (): SetLoadingType => {
    return { type: SET_LOADING };
};
const unsetLoading = (): SetLoadingType => {
    return { type: UNSET_LOADING };
};


export const signUp = async (email:string, password:string) => {
        try {
            const response = await AuthServices.signUp(email, password)
            localStorage.setItem('token', response.data.accessToken)
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
};

export const login = (email:string, password:string) => {
    return async (dispatch:any) => {
        try {
            const response = await AuthServices.login(email, password)
            console.log(response)
            dispatch(logIn(response.data.user))
            localStorage.setItem('token', response.data.accessToken)
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }
};

export const logout = () => {
    return async (dispatch:any) => {
        try {
            await AuthServices.logout()
            dispatch(logOut())
            localStorage.removeItem('token')
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }
};

export const checkAuth = () => {
    return async (dispatch:any) => {
        dispatch(setLoading())
        try {
            const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, {withCredentials: true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setUser(response.data.user))
        } catch (e: any) {
            console.log(e.response?.data?.message)
        } finally {
            dispatch(unsetLoading())
        }
    }
};
