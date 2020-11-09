const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes", JokeController.allJokes);
    app.get("/api/jokes/:id", JokeController.singleJoke);
    // app.get("/api/jokes/random", Jokes.JokeController.); random...?
    app.post("/api/jokes/new", JokeController.makeNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateAJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAJoke);
}