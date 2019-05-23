import {
    INCREMENT,
    DECREMENT,
    RESET
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