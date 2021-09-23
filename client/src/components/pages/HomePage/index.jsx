import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../../../redux/features/service";
import Main from "./Main";
import Header from "./Header";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.service.loading);
  const error = useSelector((state) => state.service.error);
  useEffect(() => {
    dispatch(fetchService());
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
