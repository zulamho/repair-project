import { Grid, Card, CardMedia } from "@material-ui/core";
import { React } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "100%",
      height: "250px",
    },
    imgcard: {
      width: "25px",
      height: "25px",
      marginRight: "30px",
    },
    product: {
      width: "370px",
      height: "560px",
      marginBottom: "30px",
      boxShadow: "0 0 20px rgb(0 0 0 / 15%)",
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
    main: {
      marginBottom: "20px",
      maxWidth: "calc(33.333% - 20px)",
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
    },
    infoblock: {
      padding: "28px 33px 25px 45px",
    },
    text: {
      fontFamily: "Montserrat,sans-serif",
      fontSize: "25px",
      fontWeight: "400",
    },
    card: {
      borderRadius: "inherit",
    },
  })
);

function ServiceCard() {
  const classes = useStyles();

  const service = useSelector((state) => {
    const { service } = state;

    if (service.filter === "") {
      return service.service;
    }

    return service.service.filter((item) => {
      return item.name.toLowerCase().includes(service.filter.toLowerCase());
    });
  });

  return (
    <Card spacing={5} className={classes.content}>
      {service?.map((item) => {
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
                    <Typography classes={{ root: classes.text }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Box className={classes.infocard}>
                    <CardMedia
                      className={classes.imgcard}
                      image={
                        "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                      }
                    />
                    <Typography classes={{ root: classes.text }}>
                      Стоимость: {item.price} руб.
                    </Typography>
                  </Box>
                  <Box className={classes.infocard}>
                    <CardMedia
                      className={classes.imgcard}
                      image={
                        "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/3.svg"
                      }
                    />
                    <Typography classes={{ root: classes.text }}>
                      {" "}
                      {item.address}
                    </Typography>
                  </Box>
                  <Box className={classes.infocard}>
                    <CardMedia
                      className={classes.imgcard}
                      image={
                        "https://raw.githubusercontent.com/thebestdevelopering/repairProject/af5aec265d414e8925f091f1efb25aca511f0f3f/client/public/4.svg"
                      }
                    />
                    <Typography classes={{ root: classes.text }}>
                      Площадь {item.square} м²
                    </Typography>
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
          </Grid>
        );
      })}
    </Card>
  );
}

export default ServiceCard;
