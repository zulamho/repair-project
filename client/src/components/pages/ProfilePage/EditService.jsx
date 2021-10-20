import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { addImage } from "../../../redux/features/service";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { editService } from "../../../redux/features/service";
import ProductUserById from "../ProductPage/ProductUserById";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => createStyles({}));

function EditService() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [square, setSquare] = useState("");

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

  const handleEditService = () => {
    dispatch(editService(id, name, price, address, square, description));
  };

  return (
    <Container>
      <ProductUserById />
      <Grid className={classes.leftbox}>
        <h2>Изменить объявление</h2>
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
          onClick={handleEditService}
          className={classes.btninput}
        >
          Добавить
        </Button>
      </Grid>
    </Container>
  );
}
export default EditService;
