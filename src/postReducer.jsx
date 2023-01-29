 export const initialState = { 
    userInput: '',
    data:[],
    errorr:null
};
export const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_INPUT':
            return{ ...state, userInput:action.payload};
        case 'SEARCH_SUCCESS':
            return {...state, data:action.payload, error: null};
        case 'SEARCH_ERROR':
            return {...state, error: action.payload, data: null};
        default:
            return state;
    }
};
