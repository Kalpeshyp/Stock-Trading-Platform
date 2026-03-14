const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const User = require("../model/UserModel");

const router = express.Router();

/* SIGNUP */

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({
      message: "Signup successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Signup failed",
    });
  }
});

/* LOGIN */

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        message: info.message,
      });
    }

    req.login(user, (err) => {
      if (err) return next(err);

      return res.json({
        message: "Login successful",
        user,
      });
    });
  })(req, res, next);
});

/* LOGOUT */

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.json({
      message: "Logged out",
    });
  });
});

module.exports = router;
