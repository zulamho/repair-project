const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  registerUser: async (req, res) => {
    try {
      const { name, email, login, password, ConfirmPassword, basket } =
        req.body;

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
        name,
        email,
        login: login,
        password: hash,
        ConfirmPassword,
        basket,
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
      return res.status(401).json({ error: "Неверный логин!" });
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json({ error: "Неверный пароль!" });
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
  // getUserBasket: async (req, res) => {
  //   try {
  //     const product = await Product.find({ basket: req.params.id });
  //     res.json(product);
  //   } catch (e) {
  //     res.json("Ошибка");
  //   }
  // },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  },
  editUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id);
      res.json("Пользователь изменен");
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

  //     addProductBasket: async (req, res) => {
  //       try {
  //         const { id } = req.params;

  //         const user = await User.findByIdAndUpdate(
  //           req.user.id,
  //           { $addToSet: { basket: id } },
  //           { new: true }
  //         );

  //         const basket = await User.findById(req.user.id).populate("basket");

  //         res.status(200).json(basket.basket);
  //       } catch (e) {
  //         console.log(e);
  //         res.status(401).json("Ошибка при добавлении в корзину пользователя");
  //       }
  //     },
};
