const express = require("express");
const Users = require("../models/Users");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../auth");

const router = express.Router();

const signToken = _id => {
  return jwt.sign({ _id }, "mi-secreto", {
    expiresIn: 60 * 60 * 24 * 365
  });
};

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  crypto.randomBytes(16, (err, salt) => {
    const newSalt = salt.toString("base64");
    crypto.pbkdf2(password, newSalt, 10000, 64, "sha1", (err, key) => {
      const encryptedPassword = key.toString("base64");
      Users.findOne({ email })
        .exec()
        .then(user => {
          if (user) {
            return res.send("Usuario ya existe");
          }
          Users.create({
            email,
            password: encryptedPassword,
            salt: newSalt
          }).then(() => {
            res.send("Usuario creado con éxito");
          });
        });
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email })
    .exec()
    .then(user => {
      if (!user) {
        return res.send("Usuario y/o contraseña no coinciden");
      }
      crypto.pbkdf2(password, user.salt, 10000, 64, "sha1", (err, key) => {
        const encryptedPassword = key.toString("base64");
        if (user.password === encryptedPassword) {
          const token = signToken(user._id);
          return res.send({ token });
        }
        return res.send("Usuario y/o contrasea incorrecta");
      });
    });
});

router.get("/me", isAuthenticated, (req, res) => {
  return res.send(req.user);
});

module.exports = router;
