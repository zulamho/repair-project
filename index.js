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
app.use(require("./routes/index"));

mongoose
  .connect("mongodb+srv://admin06:admin06@cluster0.zvgtk.mongodb.net/repair", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(4000, () => {
      console.log("Подключение к серверу...");
    });
    console.log("Сервер успешно запущен!");
  });
