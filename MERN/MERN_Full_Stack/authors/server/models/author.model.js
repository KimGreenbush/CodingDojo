const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({

}, {timestamps: true})

module.exports.Author = mongoose.model("Author", AuthorSchema)