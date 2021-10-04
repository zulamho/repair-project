import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadUserService } from "../../../redux/features/users";
import { removeService } from "../../../redux/features/service";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "300px",
      height: "300px",
    },
    product: {
      width: "300px",
      maxWidth: "300px",
    },
    content: {
      margin: "auto",
      width: "1199px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    main: {
      marginBottom: "20px",
      boxShadow: "0 0 20px rgb(0 0 0 / 15%)",
    },
    card: {
      borderRadius: "inherit",
    },
    link: {
      textDecoration: "none",
      color: "black",
      fontWeight: "600",
      fontFamily: "Montserrat",
    },
    btn: {
      textAlign: "center",
      marginBottom: "20px",
      marginTop: "20px",
    },
    name: {
      marginTop: "30px",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "500",
    },
  })
);

function UserService() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const service = useSelector((state) => state.users.userService);

  const handleDelete = (id) => {
    dispatch(removeService(id));
  };

  useEffect(() => {
    dispatch(loadUserService());
  }, [dispatch]);

  return (
    <Grid className={classes.content}>
      <Typography variant="h3">Мои объявления</Typography>

      <Grid className={classes.content}>
        {service?.map((item) => {
          return (
            <Grid className={classes.main}>
              <Grid className={classes.product}>
                <Card className={classes.card}>
                  <NavLink to={`/service/user/${item._id}`}>
                    <CardMedia
                      className={classes.img}
                      image={`http://localhost:4000/${item.pathImages}`}
                    />
                  </NavLink>
                  <Typography classes={{ root: classes.name }}>
                    {item.name}
                  </Typography>
                  <Grid className={classes.btn}>
                    <Button variant="contained" color="primary">
                      <NavLink
                        className={classes.link}
                        to={`/service/user/${item._id}`}
                      >
                        Подробнее
                      </NavLink>
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default UserService;
