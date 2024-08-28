import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';
import axios from 'axios';

const App = () => {
    const createAuthor = authorData => {
        return axios.post('http://localhost:8999/api/authors', authorData);
    };

    return (
        <Router>
            <div className="App">
                <h1>Favorite Authors</h1>
                <Routes>
                    <Route path="/authors" element={<AuthorList />} />
                    <Route path="/authors/new" element={<AuthorForm onSubmitProp={createAuthor} />} />
                    <Route path="/authors/:id/edit" element={<EditAuthor />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
