import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../../../redux/features/service";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { loadUserById } from "../../../redux/features/users";

function parseQuery(queryString) {
  var query = {};
  var pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.service.loading);
  const error = useSelector((state) => state.service.error);
  const query = parseQuery(window.location.search);
  const page = query.page ? Number(query.page) : 1;

  useEffect(() => {
    dispatch(fetchService(page));
  }, [dispatch, page]);

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
      <Footer />
    </>
  );
}

export default Home;
