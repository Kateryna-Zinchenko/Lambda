import {ActionsType, LOG_IN, LOG_OUT, SET_LOADING, SET_USER, UNSET_LOADING} from "../actions/authorization";

export interface InitialStateType {
    currentUser: object,
    isAuth: boolean,
    isLoading: boolean
}

const initialState: InitialStateType = {
    currentUser: {},
    isAuth: false,
    isLoading: false
};

const authorizationn = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        case LOG_IN:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        case LOG_OUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case UNSET_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }

};

export default authorizationn;
