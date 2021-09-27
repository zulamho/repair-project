import { Grid, Card, CardMedia } from "@material-ui/core";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { fetchService } from "../../../redux/features/service";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "300px",
    },
  })
);

function Main() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const service = useSelector((state) => state.service.service);

  //   useEffect(() => {
  //       dispatch(fetchService())
  //   }, [dispatch])

  return service?.map((item) => {
    return (
      <Grid>
        {item.name}
        <Card>
          <CardMedia className={classes.img} image={`/${item.pathImages}`} />
        </Card>
      </Grid>
    );
  });
}

export default Main;
