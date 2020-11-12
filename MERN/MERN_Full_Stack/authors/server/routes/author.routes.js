const AuthorController = require("../controllers/author.controller")

module.exports = function (app) {
    app.get("/api", AuthorController.index)
    app.get("/api", AuthorController.allAuthors)
}