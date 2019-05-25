import {
    INCREMENT,
    DECREMENT,
    RESET,
    GETINPUT,
    TOSQUARE
} from '../constants/index';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const reset = () => ({
    type: RESET
});

export const getinput = (input) => ({
    type: GETINPUT,
    payload: {
        input
    }
});

export const tosquare = () => ({
    type: TOSQUARE,
});