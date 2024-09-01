import React, { useState, useEffect } from 'react';
import { getNotes } from '../api';
import NoteList from '../components/NoteList';

function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const notesData = await getNotes();
            setNotes(notesData);
        };

        fetchNotes();
    }, []);

    return (
        <div>
            <h1>Note Wall</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default Home;
