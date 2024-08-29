import React from 'react';
import { useParams } from 'react-router-dom';

function WordDisplay() {
    const { word, textColor, bgColor } = useParams();
    const style = {
        color: textColor,
        backgroundColor: bgColor || 'transparent',
    };
    return <div style={style}>The word is: {word}</div>;
}

export default WordDisplay;