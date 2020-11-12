const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:8000/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Not connected to the database", err))