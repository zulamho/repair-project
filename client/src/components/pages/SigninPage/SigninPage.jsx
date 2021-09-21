import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { auth } from "../../../redux/features/application";

function SigninPage() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const token = useSelector((state) => state.application.token);

  const signingIn = useSelector((state) => state.application.signingIn);
  const error = useSelector((state) => state.application.error);

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleTransfer = () => {
    dispatch(auth(login, password));
  };
  //const classes = useStyles();
  // if (token) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <input
        type="text"
        onChange={handleChangeLogin}
        value={login}
        placeholder="Введите логин"
      />
      <br />
      <input
        type="password"
        onChange={handleChangePassword}
        value={password}
        type="password"
        placeholder="Введите пароль"
      />
      <br />
      <button onClick={handleTransfer}>Вход</button>
    </>
  );
}

export default SigninPage;
