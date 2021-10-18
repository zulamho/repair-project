import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage, addProduct } from "../../../redux/features/service";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);
////
function Services() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const token = useSelector((state) => state.application.token);

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
    <Grid>
      <Grid className={classes.content}>
        <Grid className={classes.rightbox}></Grid>
        <Grid className={classes.leftbox}>
          <h2>Добавить новое объявление</h2>
          <Box>
            <Box className={classes.margin}>
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
              <TextField
                className={classes.priceinp}
                mr={2}
                id="outlined-multiline-static"
                label="Введите смету"
                multiline
                rows={1}
                value={price}
                onChange={handleAddPrice}
                variant="outlined"
              />
              <TextField
                className={classes.priceinp}
                mr={2}
                id="outlined-multiline-static"
                label="Введите адрес"
                multiline
                rows={1}
                value={address}
                onChange={handleAddAddress}
                variant="outlined"
              />
              <TextField
                className={classes.priceinp}
                mr={2}
                id="outlined-multiline-static"
                label="Введите площадь"
                multiline
                rows={1}
                value={square}
                onChange={handleAddSquare}
                variant="outlined"
              />

              <TextField
                className={classes.description}
                id="outlined-multiline-static"
                label="Введите описание"
                multiline
                rows={6}
                value={description}
                onChange={handleAddDescription}
                variant="outlined"
              />
              <Grid className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.inputs}
                  id="icon-button-file"
                  type="file"
                  onChange={handleAddImage}
                />
              </Grid>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            className={classes.btninput}
          >
            Добавить товар
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
