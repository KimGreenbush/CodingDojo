const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/product.routes");

app.listen(8000, () => console.log("Server listening on port 8000"));