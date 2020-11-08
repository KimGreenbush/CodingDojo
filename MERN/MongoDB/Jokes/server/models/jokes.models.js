const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "Setup must me at least 10 characters."]
    },
    punchline: {
        type: String,
        minlength: [3, "Punchline must me at least 3 characters."]
    }
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;