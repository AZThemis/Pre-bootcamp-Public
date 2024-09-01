import React from 'react';
import { Link } from 'react-router-dom';

function NoteItem({ note }) {
    return (
        <div style={{ backgroundColor: note.value === 10 ? 'red' : 'white', padding: '10px', margin: '10px 0' }}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>Value: {note.value}</p>
            <Link to={`/notes/${note._id}`}>Edit</Link> 
        </div>
    );
}

export default NoteItem;
