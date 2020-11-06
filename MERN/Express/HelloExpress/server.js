const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ exteded: true }));
const User = require("./models/User");
const Company = require("./models/Company");

const server = app.listen(8000, () =>
console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

app.get("/api", (req, res) => {
  res.send("Nodemon is watching...");
});

app.get("/api/user/new", (req, res) => {
  res.json(new User);
});

app.get("/api/company/new", (req, res) => {
  res.json(new Company);
});

app.get("/api/user/company", (req, res) => {
  res.json([new User, new Company]);
});