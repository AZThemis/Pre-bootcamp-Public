import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNoteById, createNote, updateNote, deleteNote } from '../api'; 
import NoteForm from '../components/NoteForm';

function NoteEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({ title: '', body: '', value: 1 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id !== 'new') {
            const fetchNote = async () => {
                setIsLoading(true);
                try {
                    const noteData = await getNoteById(id);
                    setNote(noteData);
                } catch (error) {
                    console.error("Error fetching note:", error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchNote();
        } else {
            setIsLoading(false);
        }
    }, [id]);

    const handleSave = async (noteData) => {
        try {
            if (id === 'new') {
                await createNote(noteData);
            } else {
                await updateNote(id, noteData);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving note:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteNote(id);
            navigate('/');
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{id === 'new' ? 'Create Note' : 'Edit Note'}</h2>
            <NoteForm note={note} onSave={handleSave} />
            {id !== 'new' && (
                <button onClick={handleDelete}>Delete Note</button>
            )}
            <button onClick={() => navigate('/')}>Go back home</button>
        </div>
    );
}

export default NoteEdit;
