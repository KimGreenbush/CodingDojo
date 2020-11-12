const {Author} = require('../models/author.model')

module.exports.index = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err))
}

module.exports.singleAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.createAuthor = (req, res) => {
    const {name} = req.body
    Author.create({name})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}