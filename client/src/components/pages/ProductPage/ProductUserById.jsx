import { Grid, Typography, Card } from "@material-ui/core";
import { Button, CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchService,
  removeService,
  toggleTicket,
} from "../../../redux/features/service";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";
import { Box } from "@mui/system";

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
      margin: "auto",
      marginBottom: "30px",
      marginTop: "30px",
    },
    content: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      padding: "0px 90px",
      boxShadow: "none",
      overflow: "inherit",
      borderRadius: "0px",
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
      height: "690px",
      boxShadow: "0 0 20px 4px #ffb800",
    },
    user: {
      width: "500px",
      margin: "auto",
      marginTop: "50px",
      marginBottom: "20px",
      display: "flex",
    },
    imgs: {
      width: "100px",
      height: "100px",
    },
    btns: {
      height: "30px",
      marginLeft: "60px",
      marginTop: "35px",
    },
    inf: {
      marginLeft: "20px",
    },
    edit: {
      width: "300px",
      margin: "auto",
      marginTop: "70px",
      display: "flex",
      justifyContent: "space-evenly",
    },
    but: {
      width: "100px",
      height: "40px",
      background: "#ffb800",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buts: {
      textDecoration: "none",
      fontWeight: "700",
      fontSize: "16px",
      fontFamily: "Montserrat,sans-serif",
      color: "black",
      "&:hover": {
        color: "white",
      },
      footer: {
        marginTop: "50px",
      },
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

  const oneService = service.find((item) => item._id === id);

  return (
    <>
      <Header />
      <Card spacing={5} className={classes.content}>
        {service.map((item) => {
          if (item._id === id) {
            return (
              <Grid className={classes.main}>
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
                        <p className={classes.text}>Стоимость: {item.price}</p>
                      </Box>
                      <Box className={classes.infocard}>
                        <CardMedia
                          className={classes.imgcard}
                          image={
                            "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/3.svg"
                          }
                        />
                        <p className={classes.text}>{item.address}</p>
                      </Box>
                      <Box className={classes.infocard}>
                        <CardMedia
                          className={classes.imgcard}
                          image={
                            "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                          }
                        />
                        <p className={classes.text}>
                          Площадь: {item.square} м²
                        </p>
                      </Box>
                    </Grid>
                  </Card>
                </Grid>
                <Grid className={classes.edit}>
                  <Box className={classes.but}>
                    <Link className={classes.buts} to={`/edit/${item._id}`}>
                      Изменить
                    </Link>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.but}
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
      <Card>
        {oneService &&
          oneService.application.map((item) => (
            <Box>
              <Card className={classes.user}>
                <CardMedia
                  className={classes.imgs}
                  image={`http://localhost:4000/${item?.userId?.pathImages}`}
                />
                <Grid className={classes.inf}>
                  <Typography>{item?.userId?.lastName}</Typography>
                  <Typography>{item?.userId?.name}</Typography>
                  <Typography>{item?.userId?.telephone}</Typography>
                  <Typography>{item?.userId?.email}</Typography>
                </Grid>
                <Grid className={classes.btns}>
                  <Button
                    className={classes.btns}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch(
                        toggleTicket(
                          item.userId._id,
                          id,
                          item.accepted ? "remove" : "approve"
                        )
                      );
                    }}
                  >
                    {item.accepted ? "Убрать заявку" : "Принять заявку"}
                  </Button>
                </Grid>
              </Card>
            </Box>
          ))}
      </Card>
      <Grid className={classes.footer}>
        <Footer />
      </Grid>
    </>
  );
}

export default ProductUserById;
