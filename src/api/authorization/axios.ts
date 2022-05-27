import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import {AuthResponse} from "../../interfaces/authotization/AuthResponse";

export const BASE_URL = 'http://localhost:5000/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

$api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers === undefined) {
        config.headers = {};
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

$api.interceptors.response.use((config: AxiosResponse) => {
    if (config.headers === undefined) {
        config.headers = {};
    }
    return config;
}, async (error) => {
    const originalRequest= error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Unauthorized user')
        }
    }
})

export default $api

// export const signUp = async (email:string, password:string) => {
//     try{
//         const response = await axios.post("http://localhost:5000/api/signup", {
//             email,
//             password
//         })
//         alert(response.data.message)
//     } catch (e:any){
//         alert(e.response.data.message)
//     }
// }
//
// export const login = (email:string, password:string) => {
//     return async (dispatch:any) => {
//         try{
//             const response = await axios.post("http://localhost:5000/api/login", {
//                 email,
//                 password
//             })
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('token', response.data.token)
//         } catch (e:any){
//             alert(e.response.data.message)
//         }
//     }
// }
//
// export const auth = () => {
//     return async (dispatch:any) => {
//         try{
//             const response = await axios.get(`http://localhost:5000/api/auth`,
//                 {headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('token', response.data.token)
//         } catch (e:any){
//             alert(e.response.data.message)
//             localStorage.removeItem('token')
//         }
//     }
// }