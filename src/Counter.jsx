import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 5 }; // Start from 5
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="counter-container">
                <div className="counter-header">
                    <h1>Counter</h1>
                </div>
                <div className="counter-display">
                    <h2>{this.state.count}</h2>
                </div>
                <div className="counter-controls">
                    <button className="counter-button" onClick={this.increment}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
