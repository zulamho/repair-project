import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createUser, addAvatar } from "../../../redux/features/application";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MuiPhoneNumber from "material-ui-phone-number";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import HandymanIcon from "@mui/icons-material/Handyman";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles((theme) =>
  createStyles({
    telephone: {
      width: "396px",
    },
    container:{
      backgroundImage:'url(`${https://moiinstrumentu.ru/wp-content/uploads/2019/04/instrumenty-dlja-doma-i-remonta.png}`)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      margin:'-63px',
      padding:'40px 0'
      },
  })
);

function SignUpPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
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

  console.log(telephone);

  const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);
  const avatar = useSelector((state) => state.application.avatar);
  console.log(avatar.image);

  // const handleChangeImage = (e) => {
  //   setImage(e.target.value);
  // };

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

  const handleDeleteDescrip = () => {
    setTelep("");
  };
  const handleAddAvatar = async (e) => {
    await dispatch(addAvatar(e));
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
      createUser(
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>

          <Stack direction="row" spacing={2} sx={{ width: 80, height: 80 }}>
            <Avatar
              sx={{ width: 80, height: 80 }}
              src={`http://localhost:4000/${avatar.image}`}
            />
          </Stack>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleAddAvatar}
          />

          <Box
            component="form"
            noValidate
            onSubmit={handleTransfer}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  defaultValue={name}
                  onChange={handleChangeName}
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Введите имя"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  defaultValue={lastName}
                  onChange={handleChangeLastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Введите фамилию"
                  name="lastName"
                  autoComplete="lname"
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
                  defaultValue={email}
                  onChange={handleChangeEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <MuiPhoneNumber
                  defaultValue={telephone}
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
                  defaultValue={login}
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
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleTransfer}
            >
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  У вас уже есть аккаунт? <b>Войти</b>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignUpPage;
