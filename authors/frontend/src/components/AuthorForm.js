import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';

const AuthorForm = ({ initialName = '', onSubmitProp }) => {
    const [name, setName] = useState(initialName);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({ name })
            .then(() => navigate('/authors'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{initialName ? 'Edit Author' : 'Add a New Author'}</h2>
            <Link to="/authors">Home</Link>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button onClick={() => navigate('/authors')}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AuthorForm;
