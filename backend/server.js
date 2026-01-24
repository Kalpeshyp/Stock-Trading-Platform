import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("successfully");
})

app.listen(port, (req, res) => {
 res.send(`server run ${port}`);
})