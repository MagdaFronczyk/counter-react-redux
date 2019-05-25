import {
    INCREMENT,
    DECREMENT,
    RESET,
    GETINPUT,
    TOSQUARE
} from '../constants/index'

const initialState = {
    counter: 0,
    value: '',
    squared: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state, counter: state.counter - 1
            };
        case RESET:
            return {
                ...state, counter: 0
            };
        case GETINPUT:
            return {
                ...state, value: action.payload.input
            };
        case TOSQUARE:
            return {
                ...state, squared: state.value !== '' ? Math.pow(parseInt(state.value), 2) : null
            };
        default:
            return state;
    }
};

export default reducer;