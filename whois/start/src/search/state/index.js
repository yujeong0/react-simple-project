import {
    createReducer,
    createSetValueAction,
    setValueReducer,
} from '../../common/redux-helper';

//enum 형식은 대문자로 시작하게~!
export const Types = {
    SetValue: 'search/SetValue',
    FetchAutoComplete: 'search/FetchAutoComplete'
};

export const actions = {
    setValue: createSetValueAction(Types.SetValue),
    fetchAutoComplete: keyword => ({
        type: Types.FetchAutoComplete,
        keyword
    }),
};

const INITIAL_STATE = {
    keyword: '',
    autoCompletes: []
};
const reducer = createReducer(INITIAL_STATE, {
    [Types.SetValue]: setValueReducer,
});

export default reducer;