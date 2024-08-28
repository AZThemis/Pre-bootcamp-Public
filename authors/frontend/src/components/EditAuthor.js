import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const EditAuthor = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8999/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => navigate('/authors'));
    }, [id, navigate]);

    const updateAuthor = authorData => {
        return axios.put(`http://localhost:8999/api/authors/${id}`, authorData);
    };

    return (
        <div>
            {author ? (
                <AuthorForm initialName={author.name} onSubmitProp={updateAuthor} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditAuthor;
