import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createUser } from "../../../redux/features/application";

function SigninUpPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signingUp = useSelector((state) => state.application.signingUp);
  const error = useSelector((state) => state.application.error);

  const handleChangeName = (e) => {
    setName(e.target.value);
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
  const handleChangeconfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleTransfer = () => {
    dispatch(createUser(name, email, login, password, confirmPassword));
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChangeName}
        value={name}
        placeholder="Введите имя"
      />
      <br />
      <input
        type="text"
        onChange={handleChangeEmail}
        value={email}
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        onChange={handleChangeLogin}
        value={login}
        placeholder="Введите логин"
      />
      <br />
      <input
        type="text"
        onChange={handleChangePassword}
        value={password}
        type="password"
        placeholder="Введите пароль"
      />
      <br />
      <input
        type="text"
        onChange={handleChangeconfirmPassword}
        value={confirmPassword}
        type="password"
        placeholder="Подвердите пароль"
      />
      <br />
      <button onClick={handleTransfer}>Вход</button>
    </>
  );
}

export default SigninUpPage;
