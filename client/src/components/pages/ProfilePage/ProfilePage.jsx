import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, loadUserById } from "../../../redux/features/users";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import HandymanIcon from "@mui/icons-material/Handyman";
import EditIcon from "@mui/icons-material/Edit";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    profile: {
      display: "flex",
      backgroundColor: "#f8f7f7",
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
          <CardMedia
            sx={{
              width: 315,
              height: 310,
              border: 1,
              borderColor: "gainsboro",
              borderRadius: 5,
            }}
            image={`http://localhost:4000/${user.pathImages}`}
          />
          <Card className={classes.profileCard}>
            <Typography gutterBottom variant="h5" component="div">
              Имя: {user.name} {user.lastName}
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
              Описание услуги: {user.descriptionService}
            </Typography>
            <hr />
            <Link to="/editProfilePage">
              <Button size="small" color="primary">
                <EditIcon /> Редактировать
              </Button>
            </Link>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default ProfilePage;
