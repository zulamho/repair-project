import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, loadUserById } from "../../../redux/features/users";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  ClickAwayListener,
  Grid,
  IconButton,
} from "@mui/material";
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
import TextField from "@mui/material/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import { changeUser, changeAvatar } from "../../../redux/features/application";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PersonIcon from "@mui/icons-material/Person";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) =>
  createStyles({
    profile: {
      display: "flex",
    },
    profileCard: {
      marginLeft: "120px",
    },
    avatar: {
      width: "1125px",
      height: "600px",
    },
    contain: {
      width: "1200px",
      height: "600px",
      display: "flex",
      backgroundColor: "#f8f7f7",
      marginTop: "30px",
      height: "700px",
      paddingLeft: "0px",
      margin: "auto",
    },
    info: {
      paddingTop: "20px",
      marginRight: "20px",
    },
    IconButton: {
      width: "900px",
    },
    largeIcon: {
      fontSize: "3em",
    },
    inputs: {
      display: "none",
    },
  })
);

function EditProfilePage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector((state) => state.users.currentUser);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workingUser, setWorkingUser] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [descriptionService, setDescriptionService] = useState("");

  const [telep, setTelep] = useState("");

  const avatar = useSelector((state) => state.application.avatar);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadUserById());
  }, [dispatch]);

  useEffect(() => {
    setName(user.name);
    setLastName(user.lastName);
    setWorkingUser(user.workingUser);
    setEmail(user.email);
    setTelephone(user.telephone);
    setLogin(user.login);
    setDescriptionService(user.descriptionService);
  }, [user]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeWorkingUser = (e) => {
    setWorkingUser(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleChangeTelephone = (value) => {
    setTelephone(value);
  };

  const handleCreateDescriptionService = (e) => {
    setDescriptionService(e.target.value);
  };

  const handleDeleteDescriptionService = (e) => {
    setDescriptionService(e.target.value);
  };
  const handleAddAvatar = async (e) => {
    await dispatch(changeAvatar(e));
  };

  const handleDeleteDescrip = () => {
    setTelep("");
    setWorkingUser("");
  };

  const handleCreateDescrip = () => {
    return setTelep(
      <Grid item xs={12} sm={12}>
        <TextField
          defaultValue={descriptionService}
          onChange={handleCreateDescriptionService}
          required
          fullWidth
          id="lastName"
          label="Описание услуги"
          name="lastName"
          autoComplete="lname"
        />
      </Grid>
    );
  };

  const handleTransfer = () => {
    dispatch(
      changeUser(
        name,
        lastName,
        workingUser,
        email,
        login,
        password,
        ConfirmPassword,
        telephone,
        descriptionService
      )
    );
  };

  return (
    <>
      <Header />
      <Grid className={classes.contain} component="main">
        <Grid className={classes.avatar}>
          <Stack
            direction="row"
            spacing={6}
            sx={{ width: 400, height: 400, margin: "auto" }}
          >
            <Avatar
              sx={{
                width: 400,
                height: 400,
                marginTop: "20px",
                border: 4,
                borderColor: "primary.main",
              }}
              src={`http://localhost:4000/${user.pathImages}`}
            ></Avatar>
          </Stack>
          <label htmlFor="icon-button-file" color="#639fbc">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              sx={{
                marginLeft: "360px",
                marginTop: "-60px",
              }}
            >
              <PhotoCamera className={classes.largeIcon} />
            </IconButton>
            <input
              accept="image/*"
              className={classes.inputs}
              id="icon-button-file"
              type="file"
              onChange={handleAddAvatar}
            />
            <Grid />
          </label>
        </Grid>

        <Grid container spacing={2} className={classes.info}>
          <Grid item xs={12}>
            <TextField
              value={name}
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Имя"
              autoFocus
              onChange={handleChangeName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={lastName}
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Фамилия"
              autoFocus
              onChange={handleChangeLastName}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" alignItems="center">
                Выберите роль
              </FormLabel>

              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  value="Пользователь"
                  label="Пользователь"
                  onClick={handleDeleteDescrip}
                  labelPlacement="top"
                />
                <PersonIcon color="green" />

                <FormControlLabel
                  value={workingUser}
                  control={<Radio />}
                  label="Рабочий"
                  onClick={handleCreateDescrip}
                  labelPlacement="top"
                />
                <HandymanIcon color="green" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {telep}
          <Grid item xs={12}>
            <TextField
              value={email}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChangeEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <MuiPhoneNumber
              value={telephone}
              preferredCountries={["ru"]}
              disableAreaCodes={true}
              defaultCountry={"ru"}
              variant="outlined"
              type="tel"
              onChange={handleChangeTelephone}
              className={classes.telephone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={login}
              onChange={handleChangeLogin}
              required
              fullWidth
              id="login"
              label="Введите логин"
              name="login"
              autoComplete="login"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              defaultValue={password}
              onChange={handleChangePassword}
              required
              fullWidth
              name="password"
              label="Введите пароль"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleTransfer}
          >
            Редактировать
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditProfilePage;
