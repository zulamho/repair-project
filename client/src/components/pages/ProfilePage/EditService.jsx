import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Container, TextField } from "@material-ui/core";
import { addImage } from "../../../redux/features/service";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { editService } from "../../../redux/features/service";
import ProductUserById from "../ProductPage/ProductUserById";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

function EditService() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddName = (e) => {
    setName(e.target.value);
  };
  const handleAddDescription = (e) => {
    setName(e.target.value);
  };

  const handleAddImage = async (e) => {
    await dispatch(addImage(e));
  };

  const handleEditService = () => {
    dispatch(editService(id, name));
  };

  return (
    <Container>
      <ProductUserById />
      <h3>Изменение товара</h3>
      <TextField
        id="outlined-multiline-static"
        label="Название услуги"
        multiline
        rows={1}
        value={name}
        onChange={handleAddName}
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Описание услуги"
        multiline
        rows={3}
        value={name}
        onChange={handleAddDescription}
        variant="outlined"
      />

      <Button onClick={handleEditService} variant="contained" color="primary">
        Добавить
      </Button>
      <div>
        <Button onChange={handleAddImage} variant="contained">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleAddImage}
          />
        </Button>
      </div>
    </Container>
  );
}
export default EditService;
