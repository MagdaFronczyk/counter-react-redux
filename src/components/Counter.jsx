import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement, reset } from '../actions'

class Counter extends Component {

    render() {
        const { counter, onDecrement, onIncrement, onReset } = this.props;

        return (
            <div>
                <div>{counter}</div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
                <button onClick={onReset}>Reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onReset: () => dispatch(reset())
    }
};

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;