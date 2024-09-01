const Note = require('../models/Note');

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNote = async (req, res) => {
    const { title, body, value } = req.body;

    if (!title || !body || !value) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        const note = new Note({ title, body, value });
        const createdNote = await note.save();
        res.status(201).json(createdNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateNote = async (req, res) => {
    const { title, body, value } = req.body;

    try {
        const note = await Note.findById(req.params.id);

        if (note) {
            note.title = title;
            note.body = body;
            note.value = value;

            const updatedNote = await note.save();
            res.json(updatedNote);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (note) {
            await Note.deleteOne({ _id: req.params.id }); 
            res.json({ message: 'Note removed' });
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
};
