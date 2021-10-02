import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../../../redux/features/service";
import Main from "./Main";
import Header from "./Header";
import { loadUserById } from "../../../redux/features/users";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.service.loading);
  const error = useSelector((state) => state.service.error);
  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadUserById());
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home;
