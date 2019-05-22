import {
    createStore,
    applyMiddleware
} from "redux";
import reducer from '../rootreducer/index';

const store = createStore(reducer);

export default store;