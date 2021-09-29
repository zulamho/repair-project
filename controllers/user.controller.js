const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

module.exports.userController = {
  registerUser: async (req, res) => {
    try {
      const {
        image,
        name,
        lastName,
        email,
        login,
        password,
        workingUser,
        telephone,
        descriptionService,
      } = req.body;

      const candidate = await User.findOne({ login });

      if (candidate) {
        return res
          .status(401)
          .json({ error: `Пользователь с логином ${login} уже существует!` });
      }

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        pathImages: image,
        name,
        lastName,
        workingUser,
        email,
        login: login,
        password: hash,
        telephone,
        descriptionService,
      });
      res.json(user);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при регистрации: " + error.toString(),
      });
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;

    const candidate = await User.findOne({
      login,
    });

    if (!candidate) {
      return res.status(401).json({ error: "Неверный логин или пароль!" });
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json({ error: "Неверный логин или пароль!" });
    }

    const payload = {
      id: candidate._id,
      login: candidate.login,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });
    res.json({ token });
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  },
  editUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.user.id,req.body);
      res.json("Данные пользователя изменены");
    } catch (err) {
      res.json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (err) {
      res.json(err);
    }
  },

  addAvatar: async (req, res) => {
    try {
      const img = req.files.image;
      const newFileName = `./avatar/${
        Math.random() * 100000000000000000
      }${path.extname(img.name)}`;

      img.mv(newFileName, async (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json({
            success: "file uploaded",
            image: newFileName,
          });
        }
      });
    } catch (e) {
      res.json(e);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  },
};
