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

const useStyles = makeStyles((theme) => createStyles({}));

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
    setDescription(e.target.value);
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
        value={description}
        onChange={handleAddDescription}
        variant="outlined"
      />
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
      <Button onClick={handleEditService} variant="contained" color="primary">
        Добавить
      </Button>
    </Container>
  );
}
export default EditService;
