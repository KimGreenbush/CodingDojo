const Joke = require("../models/jokes.models");

module.exports.allJokes = (req, res) => {
	Joke.find()
		.then((allTheJokes) =>
			res.json({
				joke: allTheJokes,
			})
		)
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.singleJoke = (req, res) => {
	Joke.findOne({ id: req.params.id })
		.then((oneSingleJoke) =>
			res.json({
				joke: oneSingleJoke,
			})
		)
		.catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.makeNewJoke = (req, res) => {
	Joke.create(req.body)
		.then((makeNewJoke) =>
			res.json({
				joke: makeNewJoke,
			})
		)
		.catch((err) => res.json({ message: "Something went wrong", error }));
};

module.exports.updateAJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({
            joke: updatedJoke
        }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({
            result: result
        }))
        .catch(err => res.json({ message: "Something went wrong", error }));
};