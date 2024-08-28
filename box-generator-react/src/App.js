import React, { useState } from 'react';

function App() {
   
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);


    const addBox = () => {
        if (color.trim() !== '') { 
            setBoxes([...boxes, { color }]); 
            setColor(''); 
        }
    };

    return (
        <div>
            <h2>Box Generator</h2>
           
            <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)} 
                placeholder="Enter a color"
            />
          
            <button onClick={addBox}>Add</button>

           
            <div style={{ marginTop: '20px' }}>
                {boxes.map((box, index) => (
                    <div
                        key={index} 
                        style={{
                            backgroundColor: box.color, 
                            width: '100px', 
                            height: '100px', 
                            display: 'inline-block', 
                            margin: '10px', 
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default App;
