app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) return next(err);

    res.json({
      message: "Logged out",
    });
  });
});
