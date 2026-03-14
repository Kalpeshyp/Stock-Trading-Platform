const bcrypt = require("bcrypt");
const User = require("./model/UserModel");

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
