
import React, { useState, useEffect } from 'react';

function NoteForm({ note, onSave }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [value, setValue] = useState(1);

    useEffect(() => {
        if (note) {
            setTitle(note.title || '');
            setBody(note.body || '');
            setValue(note.value || 1);
        }
    }, [note]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, body, value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Note Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    minLength={2}
                    required
                />
            </div>
            <div>
                <label>Note Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    maxLength={25}
                    required
                ></textarea>
            </div>
            <div>
                <label>Note Value</label>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    min={1}
                    max={10}
                    required
                />
            </div>
            <button type="submit">Save Note</button>
        </form>
    );
}

export default NoteForm;
