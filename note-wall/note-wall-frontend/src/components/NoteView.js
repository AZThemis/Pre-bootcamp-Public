import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNoteById } from '../api';

function NoteView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const noteData = await getNoteById(id);
                setNote(noteData);
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };

        fetchNote();
    }, [id]);

    if (!note) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.body}</p>
            <p>Value: {note.value}</p>
            <button onClick={() => navigate(`/edit/${note._id}`)}>Edit Note</button>
            <button onClick={() => navigate('/')}>Go back home</button>
        </div>
    );
}

export default NoteView;
