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
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "800px",
      margin: "auto",
      height: "500px",
      boxShadow: "0 0 20px 4px black",
    },
    imgcard: {
      width: "25px",
      height: "25px",
      marginRight: "30px",
    },
    product: {
      width: "1100px",
      height: "560px",
      marginBottom: "30px",
      marginTop: "30px",

      marginLeft: "125px",
    },
    content: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "0px 90px",
      boxShadow: "none",
      overflow: "inherit",
      borderRadius: "0px",
    },

    root: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
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
      display: "flex",
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
      width: "1100px",
      boxShadow: "0 0 20px 4px #ffb800",
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

  const button = () => {};
  return (
    <>
      <Card spacing={5} className={classes.root} className={classes.content}>
        {service.map((item) => {
          if (item._id === id) {
            console.log(item.application.id);

            return (
              <Grid className={classes.product}>
                <Card className={classes.card}>
                  <Box className={classes.name}>{item.name}</Box>
                  <Button>
                    <ArrowBackIosNewIcon />
                  </Button>
                  <CardMedia
                    className={classes.img}
                    image={`http://localhost:4000/${item.pathImages}`}
                  />

                  <Button>
                    <ArrowForwardIosIcon />
                  </Button>
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
                      <p className={classes.text}>Стоимость:{item.price}</p>
                    </Box>
                    <Box className={classes.infocard}>
                      <CardMedia
                        className={classes.imgcard}
                        image={
                          "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/3.svg"
                        }
                      />
                      <p className={classes.text}>Адрес:{item.address}</p>
                    </Box>
                    <Box className={classes.infocard}>
                      <CardMedia
                        className={classes.imgcard}
                        image={
                          "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                        }
                      />
                      <p className={classes.text}>Площадь:{item.square} м²</p>
                    </Box>
                  </Grid>
                  <Box className={classes.infocard}>
                    <WysiwygIcon className={classes.imgcard} />
                    <p className={classes.text}>Описание:{item.description}</p>
                  </Box>
                  <Box className={classes.link}>
                    <Application />
                  </Box>
                </Card>
              </Grid>
            );
          }
        })}
      </Card>
    </>
  );
}

export default ProductUserById;
