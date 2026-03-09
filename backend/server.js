require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3002;
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("successfully");
});

async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected database  ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
  }
}
connectDB();

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
})


app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.listen(PORT, (req, res) => {
  console.log(`app run on port ${PORT}`);
});
