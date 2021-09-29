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
      borderRadius: "30px",
      marginBottom: "30px",
    },
    contain: {
      display: "flex",
      backgroundColor: "#f8f7f7",
    },
  })
);

function EditProfilePage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector((state) => state.users.currentUser);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workingUser, setWorkingUser] = useState("Рабочий");
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
  const handleDeleteDescrip = () => {
    setTelep("");
  };

  return (
    <>
      <Header />
      <Container>
        <Container
          className={classes.contain}
          component="main"
          sx={{ display: "flex" }}
        >
          {/* <CssBaseline /> */}

          <Grid className={classes.avatar}>
            <Stack direction="row" spacing={2} sx={{ width: 160, height: 160 }}>
              <Avatar
                sx={{ width: 160, height: 160 }}
                src={`http://localhost:4000/${user.pathImages}`}
              />
            </Stack>
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={handleAddAvatar}
            />
          </Grid>
          <Typography>Имя</Typography>

          <Grid container spacing={2}>
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
            </Grid>
          </Grid>
        </Container>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleTransfer}
        >
          Редактировать
        </Button>
      </Container>
    </>
    // <Grid>
    //   <Box className={classes.profile}>
    //     <Stack direction="row" spacing={2} sx={{ width: 80, height: 80 }}>
    //       <Avatar
    //         sx={{ width: 180, height: 180 }}
    //         src={`http://localhost:4000/${user.pathImages}`}
    //       />
    //       <LocalSeeIcon />
    //     </Stack>
    //     <input
    //       accept="image/*"
    //       id="contained-button-file"
    //       type="file"
    //       onChange={handleAddAvatar}
    //     />

    //     <Card
    //       sx={{ maxWidth: 1000, maxHight: 1000 }}
    //       className={classes.profileCard}
    //     >
    //       <CardActionArea>
    //         <CardContent>
    //           <Grid item xs={12}>
    //             <TextField
    //               value={name}
    //               autoComplete="fname"
    //               name="firstName"
    //               required
    //               fullWidth
    //               id="firstName"
    //               label="Имя"
    //               autoFocus
    //               onChange={handleChangeName}
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               value={lastName}
    //               autoComplete="fname"
    //               name="firstName"
    //               required
    //               fullWidth
    //               id="firstName"
    //               label="Фамилия"
    //               autoFocus
    //               onChange={handleChangeLastName}
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               value={email}
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //               onChange={handleChangeEmail}
    //             />
    //           </Grid>
    //           {/* <Grid item xs={12}>
    //             <TextField
    //               value={descriptionService}
    //               required
    //               fullWidth
    //               id="descriptionService"
    //               name="descriptionService"
    //               autoComplete="descriptionService"
    //             />
    //           </Grid> */}

    //           <Grid item xs={12}>
    //             <MuiPhoneNumber
    //               value={telephone}
    //               preferredCountries={["ru"]}
    //               disableAreaCodes={true}
    //               defaultCountry={"ru"}
    //               variant="outlined"
    //               type="tel"
    //               onChange={handleChangeTelephone}
    //               className={classes.telephone}
    //             />
    //           </Grid>

    //           <Grid item xs={12}>
    //             <TextField
    //               value={login}
    //               onChange={handleChangeLogin}
    //               required
    //               fullWidth
    //               id="login"
    //               label="Введите логин"
    //               name="login"
    //               autoComplete="login"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               value={password}
    //               required
    //               fullWidth
    //               name="password"
    //               label="Введите пароль"
    //               type="password"
    //               id="password"
    //               autoComplete="new-password"
    //               onChange={handleChangePassword}
    //             />
    //           </Grid>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //           onClick={handleTransfer}
    //         >
    //           Редактировать
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   </Box>
    // </Grid>
  );
}

export default EditProfilePage;
