import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  CardMedia,
  Card,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage, addProduct } from "../../../redux/features/service";
import Footer from "../HomePage/Footer";
import Header from "../HomePage/Header";
//
const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      display: "flex",
      flexDirection: "column",
    },

    inputBlok: {
      width: "500px",
      display: "flex",
    },
    largeIcon: {
      fontSize: "10em",
    },
    img: {
      width: "300px",
      margin: "auto",
      height: "300px",
      boxShadow: "0 0 20px 4px black",
    },
    imgcard: {
      width: "25px",
      height: "25px",
      marginRight: "30px",
    },
    content: {
      marginBottom: "30px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "0px 90px",
      boxShadow: "none",
      overflow: "inherit",
      borderRadius: "0px",
    },
    product: {
      width: "1300px",
      marginBottom: "30px",
      marginTop: "30px",
    },

    name: {
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "700",
      fontSize: "16px",
      fontFamily: "Montserrat,sans-serif",
    },
    link: {
      height: "50px",
      margin: "5px 0 30px 0",
      background: "#ffb800",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    links: {
      textDecoration: "none",
      fontWeight: "700",
      fontSize: "16px",
      fontFamily: "Montserrat,sans-serif",
      color: "black",
      "&:hover": {
        color: "white",
      },
    },
    infocard: {
      height: "30px",
      paddingBottom: "15px",

      alignItems: "center",
      margin: "0px 20px 0px 30px",
    },
    infoblock: {
      padding: "28px 33px 25px 45px",
      display: "flex",
    },
    text: {
      fontFamily: "Montserrat,sans-serif",
      fontSize: "16px",
      fontWeight: "400",
    },
    card: {
      borderRadius: "inherit",
      width: "1200px",
      boxShadow: "0 0 20px 4px #ffb800",
    },
    description: {
      marginTop: "55px",
      marginLeft: "73px",
      width: "1045px",

      boxShadow: "0 0 20px 4px black",
      input: {
        boxShadow: "0 0 20px 4px #green",
      },
    },
  })
);

function Services() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [square, setSquare] = useState("");
  const [description, setDescription] = useState("");

  const handleAddName = (e) => {
    setName(e.target.value);
  };

  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAddAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleAddSquare = (e) => {
    setSquare(e.target.value);
  };

  const handleAddDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddImage = async (e) => {
    await dispatch(addImage(e));
  };
  const handleAddProduct = () => {
    dispatch(addProduct(name, price, address, square, description));
  };

  return (
    <>
      <Header />
      <Grid className={classes.content}>
        <Grid className={classes.product}>
          <Card className={classes.card}>
            <Box className={classes.link}>Дoбавить новое объявление</Box>

            <CardMedia className={classes.img} />
            <Grid className={classes.root}>
              <input
                accept="image/*"
                className={classes.inputs}
                id="icon-button-file"
                type="file"
                onChange={handleAddImage}
              />
            </Grid>

            <Grid className={classes.infoblock}>
              <Box className={classes.infocard}>
                <CardMedia
                  className={classes.imgcard}
                  image={
                    "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/2.svg"
                  }
                />
                Наименование:{" "}
                <TextField
                  className={classes.input}
                  mr={2}
                  id="outlined-multiline-static"
                  label="Название услуги"
                  multiline
                  rows={1}
                  value={name}
                  onChange={handleAddName}
                  variant="outlined"
                />
              </Box>
              <Box className={classes.infocard}>
                <CardMedia
                  className={classes.imgcard}
                  image={
                    "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                  }
                />
                Стоимость:
                <TextField
                  className={classes.input}
                  mr={2}
                  id="outlined-multiline-static"
                  label="Введите смету"
                  multiline
                  rows={1}
                  value={price}
                  onChange={handleAddPrice}
                  variant="outlined"
                />
              </Box>
              <Box className={classes.infocard}>
                <CardMedia
                  className={classes.imgcard}
                  image={
                    "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/3.svg"
                  }
                />
                Адрес:{" "}
                <TextField
                  className={classes.input}
                  mr={2}
                  id="outlined-multiline-static"
                  label="Введите адрес"
                  multiline
                  rows={1}
                  value={address}
                  onChange={handleAddAddress}
                  variant="outlined"
                />
              </Box>
              <Box className={classes.infocard}>
                <CardMedia
                  className={classes.imgcard}
                  image={
                    "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                  }
                />
                Площадь:{" "}
                <TextField
                  className={classes.input}
                  mr={2}
                  id="outlined-multiline-static"
                  label="Введите площадь"
                  multiline
                  rows={1}
                  value={square}
                  onChange={handleAddSquare}
                  variant="outlined"
                />
                м²
              </Box>
            </Grid>

            <TextField
              className={classes.description}
              id="filled-multiline-static"
              label="Описание"
              multiline
              rows={4}
              defaultValue={description}
              onChange={handleAddDescription}
              variant="filled"
            />
            <Box className={classes.link}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddProduct}
                className={classes.btninput}
              >
                Добавить объявление
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Services;
