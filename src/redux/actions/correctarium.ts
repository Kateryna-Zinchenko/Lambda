export type ActionsType = SelectedLanguageType & TextAreaValueType;

type SelectedLanguageType = {
    type: string,
    language: string
};

type TextAreaValueType = {
    type: string,
    textAreaText: string
}

export const SET_SELECTED_LANGUAGE = "SET-SELECTED-LANGUAGE";
export const SET_TEXTAREA_VALUE = "GET_TEXTAREA_VALUE";

export const setSelectedLanguage = (language: string): SelectedLanguageType => {
    return { type: SET_SELECTED_LANGUAGE, language };
};

export const getTextAreaValue = (textAreaText: string): TextAreaValueType => {
    return { type: SET_TEXTAREA_VALUE, textAreaText };
};
