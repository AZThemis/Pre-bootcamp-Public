
import React from 'react';

function Box({ color }) {
  const boxStyle = {
    backgroundColor: color,
    width: '100px',
    height: '100px',
    display: 'inline-block',
    margin: '10px'
  };

  return <div style={boxStyle}></div>;
}

export default Box;
