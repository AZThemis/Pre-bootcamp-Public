import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8999/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8999/api/authors/${authorId}`)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== authorId));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to="/authors/new">Add an author</Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/edit`}>Edit</Link>
                                {' '}
                                <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorList;
