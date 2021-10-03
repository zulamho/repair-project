import { Grid, Typography, Card } from "@material-ui/core";
import { Button, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchService, removeService } from "../../../redux/features/service";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import Application from "./Application";
import { Box } from "@mui/system";
import Header from "../HomePage/Header";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "300px",
      height: "300px",
    },
  })
);

function ProductUserById() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const service = useSelector((state) => {
    return state.service.service;
  });

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeService(id));
  };

  return (
    <Card spacing={5} className={classes.root} className={classes.content}>
      {service.map((item) => {
        if (item._id === id) {
          return (
            <Grid className={classes.main}>
              <Header />
              <Grid className={classes.product}>
                <Card className={classes.card}>
                  <Box className={classes.name}>{item.name}</Box>
                  <CardMedia
                    className={classes.img}
                    image={`http://localhost:4000/${item.pathImages}`}
                  />
                  <Grid className={classes.infoblock}>
                    <Box className={classes.infocard}>
                      <CardMedia
                        className={classes.imgcard}
                        image={
                          "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/2.svg"
                        }
                      />
                      <p className={classes.text}>{item.name}</p>
                    </Box>
                    <Box className={classes.infocard}>
                      <CardMedia
                        className={classes.imgcard}
                        image={
                          "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                        }
                      />
                      <p className={classes.text}>Стоимость {item.price}</p>
                    </Box>
                    <Box className={classes.infocard}>
                      <CardMedia
                        className={classes.imgcard}
                        image={
                          "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/3.svg"
                        }
                      />
                      <p className={classes.text}> {item.address}</p>
                    </Box>
                    <Box className={classes.infocard}>
                      <CardMedia
                        className={classes.imgcard}
                        image={
                          "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                        }
                      />
                      <p className={classes.text}>Площадь {item.square} м²</p>
                    </Box>
                  </Grid>
                  <Box className={classes.link}>
                    <NavLink
                      className={classes.links}
                      to={`/service/${item._id}`}
                    >
                      Подробнее
                    </NavLink>
                  </Box>
                </Card>
              </Grid>
              <Grid>
                <Link to={`/edit/${item._id}`}>Изменить</Link>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  Удалить
                </Button>
              </Grid>
            </Grid>
          );
        }
      })}
    </Card>
  );
}

export default ProductUserById;
