import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";

class Counter extends Component {

    render() {
        const { counter, onDecrement, onIncrement } = this.props;

        return (
            <div>
                <div>{counter}</div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
};

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;