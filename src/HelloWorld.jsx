import React from 'react';
import './HelloWorld.css';

const HelloWorld = ({ name }) => {
    return <h1 className="hello-world">Hello, {name}!</h1>;
};

export default HelloWorld;

