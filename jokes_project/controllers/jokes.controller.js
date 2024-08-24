
const Joke = require('../models/jokes.model');

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
             .then(jokes => res.json(jokes))
            .catch(err => res.json(err));
    },
    getJokeById: (req, res) => {
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.json(err));
    },
    createJoke: (req, res) => {
        Joke.create(req.body)
             .then(newJoke => res.json(newJoke))
            .catch(err => res.json(err));
    },
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
             .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err));
    },
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
             .then(result => res.json(result))
            .catch(err => res.json(err));
    },
    getRandomJoke: (req, res) => {
        Joke.aggregate([{ $sample: { size: 1 } }])
             .then(joke => res.json(joke))
            .catch(err => res.json(err));
    }
};
