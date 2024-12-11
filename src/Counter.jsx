import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    render() {
        return (
            <div className="counter-container">
                <h1>{this.state.count}</h1>
                <button className="counter-button" onClick={this.increment}>
                    Increment
                </button>
                <button className="counter-button" onClick={this.decrement}>
                    Decrement
                </button>
                <button className="counter-button reset" onClick={this.reset}>
                    Reset
                </button>
            </div>
        );
    }
}

export default Counter;
