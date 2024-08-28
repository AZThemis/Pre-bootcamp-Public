const { Author } = require('../models/Author.model');

module.exports.getAllAuthors = (req, res) => {
    Author.find().sort({ name: 1 }) // Sort authors alphabetically
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
};

module.exports.getAuthorById = (req, res) => {
    Author.findById(req.params.id)
        .then(author => {
            if (author) {
                res.json(author);
            } else {
                res.status(404).json({ message: "Author not found" });
            }
        })
        .catch(err => res.json(err));
};

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err)); // Validation errors
};

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => {
            if (updatedAuthor) {
                res.json(updatedAuthor);
            } else {
                res.status(404).json({ message: "Author not found" });
            }
        })
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(deletedAuthor => {
            if (deletedAuthor) {
                res.json(deletedAuthor);
            } else {
                res.status(404).json({ message: "Author not found" });
            }
        })
        .catch(err => res.json(err));
};
