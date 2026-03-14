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

app.get("/", (req, res) => {
  res.send("successfully");
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

app.get("/login", (req, res) => {
  res.json({
    error: req.flash("error"),
    success: req.flash("success"),
  });
});
app.post(
  "/auth/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  }),
);

app.get("/allHoldings", isAuth, async (req, res) => {
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

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.json({
    message: "User registered successfully",
  });
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    message: "Login successful",
    user: req.user,
  });
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) return next(err);

    res.json({
      message: "Logged out",
    });
  });
});

app.listen(PORT, (req, res) => {
  console.log(`app run on port ${PORT}`);
});
