require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3002;
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const session = require("express-session");
const passport = require("./config/Passport");
const authRoutes = require("./routes/AuthRoute");
const connectDB = require("./config/MongoDB");
const bcrypt = require("bcrypt");
const User = require("./model/UserModel");
const isAuth = require("./middlewares");

const flash = require("connect-flash");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api call successfull");
});

app.use(
  session({
    secret: "trading_secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use("/auth", authRoutes);

connectDB();

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, (req, res) => {
  console.log(`app run on port ${PORT}`);
});
