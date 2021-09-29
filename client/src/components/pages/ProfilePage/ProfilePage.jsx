import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, loadUserById } from "../../../redux/features/users";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import BuildIcon from "@mui/icons-material/Build";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import HandymanIcon from "@mui/icons-material/Handyman";
import EditIcon from "@mui/icons-material/Edit";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Header from "../HomePage/Header";
import EditProfilePage from "./EditProfilePage";
import Profile from "./Profile";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    profile: {
      display: "flex",
      backgroundColor: "#e4eac3",
      borderRadius: "237px",
      width: "1380px",
      marginLeft: "-75px",
    },
    profileCard: {
      backgroundColor: "#e4eac3",
      border: 2,
    },
  })
);

function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);
  const classes = useStyles();
  const [telep, setTelep] = useState("");
  const [telep1, setTelep1] = useState("");
  console.log(user.name);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserById());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Box className={classes.profile}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: 415, height: 410, marginTop: "5px" }}
          >
            <Avatar
              sx={{ width: 415, height: 410, border: 2 }}
              src={`http://localhost:4000/${user.pathImages}`}
            />
          </Stack>
          <Card
            sx={{ maxWidth: 1000, maxHight: 1000 }}
            className={classes.profileCard}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Имя: {user.name} {user.lastname}
              </Typography>
              <hr />
              <Typography gutterBottom variant="h5" component="div">
                Логин: {user.login}
              </Typography>
              <hr />
              <Typography gutterBottom variant="h5" component="div">
                Электронная почта: {user.email}
              </Typography>
              <hr />
              <Typography gutterBottom variant="h5" component="div">
                Статус: <HandymanIcon color="green" /> {user.workingUser}
              </Typography>
              <hr />
              <Typography gutterBottom variant="h5" component="div">
                Телефон: <LocalPhoneIcon color="green" /> {user.telephone}
              </Typography>
              <hr />
              <Typography variant="body2" color="text.secondary">
                {" "}
                {user.descriptionService}
              </Typography>
              <hr />
              <Link to="/editProfilePage">
                <Button size="small" color="primary">
                  <EditIcon /> Редактировать
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default ProfilePage;
