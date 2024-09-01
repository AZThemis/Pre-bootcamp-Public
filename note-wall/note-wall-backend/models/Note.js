const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must contain 2 characters'],
    },
    body: {
        type: String,
        required: [true, 'Body is required'],
        maxlength: [25, 'Body must contain max of 25 characters'],
    },
    value: {
        type: Number,
        required: [true, 'Value is required'],
        min: [1, 'Value must be between 1 and 10'],
        max: [10, 'Value must be between 1 and 10'],
    },
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
