const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(cors());
app.use("/image", express.static(path.resolve(__dirname, "image")));
app.use("/avatar", express.static(path.resolve(__dirname, "avatar")));

app.use(require("./routes/index"));

console.log("Подключение к базе данных");
mongoose
  .connect(
    "mongodb+srv://admin06:admin06@cluster0.zvgtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("Сервер успешно запущен!");
    });
    console.log("Сервер успешно запущен!");
  });
