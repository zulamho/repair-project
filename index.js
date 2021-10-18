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
//

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(express.static(path.resolve(__dirname, "client" , "build")))
app.get("*",  (req , res) =>{
  res.sendFile(path.resolve(__dirname, "client" , "build" , "index.html"))
});

console.log("Подключение к базе данных");
mongoose
  .connect(process.env.MONGO_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Сервер успешно запущен!");
    });
    console.log("Сервер успешно запущен!");
  });
