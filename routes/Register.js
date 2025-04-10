const express = require("express");
const router = express.Router();
const UserData = require("../models/RegisterModal");

router.use("/get", async function (req, res) {
  await UserData.find()
    .then(function (user) {
      res.send(user).status(200);
    })
    .catch(function (err) {
      res.send(err).status(400);
    });
});
router.post("/post", async function (req, res) {
    const {name, email, username, password}= req.body;

    await UserData.create({
        Name: name,
        Email:email,
        UserName: username,
        PassWord: password,
    })
    .then(function (user) {
        res.send(user).status(200);
      })
      .catch(function (err) {
        res.send(err).status(400);
      });
});

module.exports = router;
