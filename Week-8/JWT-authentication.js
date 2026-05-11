const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

const posts = [
  { username: "CBIT", title: "Welcome CBIT" },
  { username: "MGIT", title: "Welcome MGIT" }
];

function authToken(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post("/login", (req, res) => {
  const user = { username: req.body.username };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.json({ token });
});

app.get("/posts", authToken, (req, res) => {
  res.json(posts.filter(p => p.username === req.user.username));
});

app.listen(3000, () => console.log("Running on port 3000"));