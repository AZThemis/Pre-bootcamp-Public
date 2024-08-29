import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';
import WordDisplay from './components/WordDisplay';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/:number" element={<NumberDisplay />} />
                    <Route path="/:word/:textColor/:bgColor?" element={<WordDisplay />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
