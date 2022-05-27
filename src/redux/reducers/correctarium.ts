import {ActionsType, SET_SELECTED_LANGUAGE, SET_TEXTAREA_VALUE} from '../actions/correctarium';
import {priceCalculation} from "../../helpers/correctarium/priceCalculation";
import {timeCalculation} from "../../helpers/correctarium/timeCalculation";
import {deadlineCalculation} from "../../helpers/correctarium/deadlineCalculation";

export interface InitialStateType {
    inputText: string;
	selectedLanguage: string;
	deadline: null | string,
	price: number
}

const initialState: InitialStateType = {
	inputText: '',
	selectedLanguage: 'Мова',
	deadline: null,
	price: 0
};

const correctarium = (state = initialState, action: ActionsType) => {
    switch (action.type) {
    	case SET_SELECTED_LANGUAGE:
    		return {
    			...state,
				selectedLanguage: action.language,
				price: action.language !== 'Мова' && state.inputText.length !== 0 ?
					Math.floor(priceCalculation(action.language, state.inputText.length, '.txt') * 100) / 100 : 0,
				deadline: action.language !== 'Мова' && state.inputText.length !== 0 &&
					deadlineCalculation(Date.now(), timeCalculation(action.language, state.inputText.length, '.txt'))
    		};
		case SET_TEXTAREA_VALUE:
			return {
				...state,
				inputText: action.textAreaText,
				price: state.selectedLanguage !== 'Мова' && action.textAreaText.length!== 0 ?
					Math.floor(priceCalculation(state.selectedLanguage, action.textAreaText.length, '.txt') * 100) / 100 : 0,
				deadline: state.selectedLanguage !== 'Мова' && action.textAreaText.length!== 0 &&
					deadlineCalculation(Date.now(), timeCalculation(state.selectedLanguage, action.textAreaText.length, '.txt'))
			};
    	default:
    		return state;
    }
    return state;


};

export default correctarium;
