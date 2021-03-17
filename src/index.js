require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const { upsertUser } = require('./db/functions');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/user", async (req, res) => {
  const { body } = req;
  const user = await upsertUser(body);
  res.send(user);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
