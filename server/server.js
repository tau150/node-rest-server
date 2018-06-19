const express = require("express");
const bodyParser = require("body-parser");
require("./config/config");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/usuarios", (req, res) => {
  res.json("get Usuario");
});

app.post("/usuarios", (req, res) => {
  let body = req.body;

  res.json({ body });
});

app.put("/usuarios/:id", (req, res) => {
  let id = req.params.id;
  res.json({ id });
});

app.delete("/usuarios", (req, res) => {
  res.json("delete Usuario");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
