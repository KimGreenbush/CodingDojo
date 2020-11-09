const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const allRoutes = require("./server/routes/jokes.routes");
allRoutes(app);

app.listen(8000, () => console.log("The server is running."))