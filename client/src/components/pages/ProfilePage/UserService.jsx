import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadUserService } from "../../../redux/features/users";

const useStyles = makeStyles((theme) =>
  createStyles({
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
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    main: {
      marginBottom: "20px",
    },
  })
);

function UserService() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const service = useSelector((state) => state.users.userService);

  useEffect(() => {
    dispatch(loadUserService());
  }, [dispatch]);

  return (
    <Grid>
      <Typography variant="h2">Ваши объявления</Typography>

      <Grid className={classes.content}>
        {service?.map((item) => {
          return (
            <Grid className={classes.main}>
              <Grid className={classes.product}>
                <Card>
                  <NavLink to={`/service/${item._id}`}>
                    <CardMedia
                      className={classes.img}
                      image={`http://localhost:4000/${item.pathImages}`}
                    />
                  </NavLink>
                  {item.name}
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