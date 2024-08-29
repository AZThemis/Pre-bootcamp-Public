import React from 'react';
import { useParams } from 'react-router-dom';

function NumberDisplay() {
    const { number } = useParams();
    return <div>The number is: {number}</div>;
}

export default NumberDisplay;