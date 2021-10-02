import { Grid, Typography } from "@material-ui/core";
import { Button, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchService } from "../../../redux/features/service";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Application from "./Application";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "300px",
      height: "300px",
    },
  })
);

function ProductById() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const [click, setClick] = useState(" Отклик");

  const handleAddApplications = () => {
    setClick("Заявка отправлена");
  };

  const service = useSelector((state) => {
    return state.service.service;
  });

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  return (
    <Grid>
      {service.map((item) => {
        if (item._id === id) {
          return (
            <Grid>
              <Grid>
                <Grid>
                  <CardMedia
                    className={classes.img}
                    image={`http://localhost:4000/${item.pathImages}`}
                  />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                </Grid>
                <Application />
              </Grid>
            </Grid>
          );
        }
      })}
    </Grid>
  );
}

export default ProductById;
