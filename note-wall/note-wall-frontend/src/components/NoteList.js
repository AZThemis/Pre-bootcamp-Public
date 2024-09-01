import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note._id} note={note} />
            ))}
        </div>
    );
}

export default NoteList;
