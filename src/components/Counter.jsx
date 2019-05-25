import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement, reset, getinput, tosquare } from '../actions'

class Counter extends Component {

    render() {
        const { counter, onDecrement, onIncrement, onReset, value, onGetinput, onTosquare, squared } = this.props;

        return (
            <div>
                <div>
                    <h2>To square</h2>
                    <label htmlFor="">
                        <input type="text" onChange={(event) => onGetinput(event.target.value)}
                            value={value} />
                    </label>
                    <button onClick={onTosquare}>Squared</button>
                    <div>{squared}</div>
                </div>
                <div>
                    <h2>Increment/Decrement</h2>
                    <div>{counter}</div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onReset}>Reset</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        value: state.value,
        squared: state.squared
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onReset: () => dispatch(reset()),
        onGetinput: (input) => dispatch(getinput(input)),
        onTosquare: () => dispatch(tosquare())
    }
};

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;