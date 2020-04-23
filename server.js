const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("test succesfull!");
});

app.listen(3000, () =>
  console.log("Test Server Utils app listening on port 3000!")
);
