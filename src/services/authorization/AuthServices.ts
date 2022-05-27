import { AxiosResponse } from "axios";
import $api from "../../api/authorization/axios";
import {AuthResponse} from "../../interfaces/authotization/AuthResponse";

export default class AuthServices {
    static async signUp (email:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/signup', {email, password})
    }
    static async login (email:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }
    static async logout (): Promise<void> {
        return $api.post('/logout')
    }
 }