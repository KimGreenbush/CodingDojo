const {Author} = require('../models/author.model')

module.exports.index = (req, res) => {
    res.json({
        message: "Welcome to the Author's app!"
    })
}

module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err))
}