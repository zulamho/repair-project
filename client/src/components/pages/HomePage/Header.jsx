import { Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import logo from "../../logo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      width: "300px",
      maxWidth: "300px",
      height: "300px",
      marginBottom: "20px",
    },
    img: {
      marginLeft: "50px",
      marginBottom: "25px",
      marginTop: "25px",
      width: "50px",
      height: "40px",
    },
    content: {
      display: "flex",
      height: "90px",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navbar: {
      width: "450px",
      paddingLeft: "30px",
    },
    link: {
      textDecoration: "none",
      fontFamily: "Montserrat",
      fontSize: "18px",
      color: "#252B42",
      "&:hover": {
        color: "#FA4A0C",
      },
    },
    links: {
      fontSize: "18px",
      marginLeft: "40px",
      textDecoration: "none",
      fontFamily: "Montserrat",
      color: "#252B42",
      "&:hover": {
        color: "#FA4A0C",
      },
    },
  })
);

function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Grid className={classes.content}>
        <Grid className={classes.logo}>
          <NavLink to="/">
            <CardMedia className={classes.img} image={`${logo}`} />
          </NavLink>
        </Grid>
        <Grid className={classes.navbar}>
          <NavLink to="/signin" className={classes.link}>
            Авторизация
          </NavLink>
          <NavLink to="/signUp" className={classes.links}>
            Регистрация
          </NavLink>
          <NavLink to="/profilePage" className={classes.links}>
            Личный кабинет
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Header;
