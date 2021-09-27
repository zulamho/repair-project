import { Grid, Card, CardMedia } from "@material-ui/core";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainer: {
      backgroundImage: `url("https://raw.githubusercontent.com/thebestdevelopering/repairProject/main/image/bg-applicant-supernova-1__min_.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 700px",
      height: "612px",
      marginBottom: "30px",
    },
    img: {
      width: "300px",
      height: "300px",
    },
    product: {
      width: "300px",
      maxWidth: "300px",
      height: "300px",
      marginBottom: "20px",
    },
    content: {
      width: "100%",
    },
    main: {},
    root: {
      display: "flex",
      justifyContent: "space-around",
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

  return (
    <>
      <Grid className={classes.content}> </Grid>
      <Grid className={classes.mainer}>xs</Grid>
      <Card spacing={5} className={classes.root}>
        {service?.map((item) => {
          return (
            <Grid className={classes.main}>
              <Grid className={classes.product}>
                <Card>
                  <CardMedia
                    className={classes.img}
                    image={`http://localhost:4000${item.pathImages}`}
                  />
                  {item.name}
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Card>
    </>
  );
}

export default Main;
