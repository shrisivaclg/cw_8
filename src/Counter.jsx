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
            <div className="counter-card">
                <div className="counter-circle">
                    <h2>{this.state.count}</h2>
                </div>
                <button className="counter-button" onClick={this.increment}>
                    +
                </button>
            </div>
        );
    }
}

export default Counter;
