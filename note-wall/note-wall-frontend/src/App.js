import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NoteEdit from './pages/NoteEdit';
import NoteView from './components/NoteView';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notes/:id" element={<NoteView />} /> 
                    <Route path="/edit/:id" element={<NoteEdit />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
