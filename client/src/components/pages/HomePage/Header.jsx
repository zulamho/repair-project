import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import logo from "../../logo.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import { useDispatch, useEffect } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      width: "80px",
      height: "80px",
    },
    content: {
      display: "flex",
      height: "90px",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navbar: {},
    link: {
      textDecoration: "none",
      fontFamily: "Montserrat",
      fontSize: "18px",
      color: "#252B42",
      "&:hover": {
        color: "#FA4A0C",
      },
      margin: "auto",
    },
    links: {
      fontSize: "18px",

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
    logoAuthorization:{
      fontSize: "2.5rem",
      color: "black",
      marginBottom: "17px",
  }
    
  })
);

function Header() {
  const token = useSelector((state) => state.application.token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);

  const exitUser = () => {
    localStorage.clear();
    dispatch({ type: "application/profile/exit" });
  };

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
        <Box marginLeft="48px">
        
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: 60, height: 69, marginTop: "5px" }}
          >
            <Avatar
              sx={{ width: 60, height: 60, border: 2 }}
              src={`http://localhost:4000/${user.pathImages}`}
            />

            <Typography sx={{ height: 72 }}>
              {user.name} {user.lastName}
            </Typography>
          </Stack>
        </Box>
        <hr />
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
          <NavLink to="/service" className={classes.link}>
            <ListItemIcon>
              <AddCommentOutlinedIcon />
              <ListItemText primary=" Добавить объявление" />
            </ListItemIcon>
          </NavLink>,
          <NavLink to="/" className={classes.link} onClick={exitUser}>
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
        <Grid className={classes.navbar}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              color="secondary"
            >
              <Button marginLeft="10px">
                <NavLink to="/" className={classes.link}>
                  Главная
                </NavLink>
              </Button>
              <Button>
                <NavLink to="/signUp" className={classes.links}>
                  Виды услуг
                </NavLink>
              </Button>
              <Button>
                <NavLink to="/profilePage" className={classes.links}>
                  Контакты
                </NavLink>
              </Button>
              <Button>
                <NavLink to="/profilePage" className={classes.links}>
                  О нас
                </NavLink>
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid>
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <ListItemIcon>
                {/* <AccountCircleIcon className={classes.logoAuthorization}/> */}
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
