const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Hello from server");
});

app.listen(5000, () => {
  console.log("server is up");
});
