import { Grid, CardMedia } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.service);

  return service?.map((item) => {
    return (
      <Grid>
        {item.name}
        <img src={item.pathImages} alt="" />
           
      </Grid>
    );
  });
}

export default Main;
