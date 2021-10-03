import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import logo from "../../logo.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      width: "300px",
      maxWidth: "300px",
      height: "300px",
      marginBottom: "20px",
    },
    header: {
      background: "#ffb800",
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
      width: "150px",
      paddingLeft: "30px",
    },
    navbars: {
      width: "750px",
      paddingLeft: "440px",
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
      navigat: {
        width: "350px",
        display: "flex",
      },
    },
  })
);

function Header() {
  const token = useSelector((state) => state.application.token);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <NavLink to="/signin" className={classes.link}>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
              <ListItemText primary=" Авторизация" />
            </ListItemIcon>
          </NavLink>,
          <NavLink to="/signUp" className={classes.link}>
            <ListItemIcon>
              <PersonAddOutlinedIcon />
              <ListItemText primary=" Регистрация" />
            </ListItemIcon>
          </NavLink>,
          <NavLink to="/profilePage" className={classes.link}>
            <ListItemIcon>
              <ContactPhoneOutlinedIcon />
              <ListItemText primary=" Личный аккаунт" />
            </ListItemIcon>
          </NavLink>,
          <NavLink to="/profilePage" className={classes.link}>
            <ListItemIcon>
              <AddCommentOutlinedIcon />
              <ListItemText primary=" Добавить объявление" />
            </ListItemIcon>
          </NavLink>,
          <NavLink to="/profilePage" className={classes.link}>
            <ListItemIcon>
              <ExitToAppIcon />
              <ListItemText primary="Выйти" />
            </ListItemIcon>
          </NavLink>,
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <Grid className={classes.content}>
        <Grid className={classes.logo}>
          <NavLink to="/">
            <CardMedia className={classes.img} image={`${logo}`} />
          </NavLink>
        </Grid>
        <Grid className={classes.navbars}>
          <NavLink to="/signin" className={classes.link}>
            Главная
          </NavLink>
          <NavLink to="/signUp" className={classes.links}>
            Виды услуг
          </NavLink>
          <NavLink to="/profilePage" className={classes.links}>
            О нас
          </NavLink>
        </Grid>
        <Grid className={classes.navbar}>
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon
                    onClick={toggleDrawer(anchor, true)}
                  />
                </ListItemIcon>

                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Header;
