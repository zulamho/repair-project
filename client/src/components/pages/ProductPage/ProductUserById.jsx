import { Grid, Typography } from "@material-ui/core";
import { Button, CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchService, removeService } from "../../../redux/features/service";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import Application from "./Application";
import Header from "../HomePage/Header";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "300px",
    height: "300px",
  },
  qaz: {
    fontSize: "30px",
  },
}));

function ProductUserById() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const service = useSelector((state) => {
    return state.service.service;
  });
  const user = useSelector((state) => state.users.items);

  const handleDelete = (id) => {
    dispatch(removeService(id));
  };

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  return (
    <Grid>
      {service.map((item) => {
        if (item._id === id) {
          return (
            <Grid>
              <Header />
              <Grid>
                <Grid>
                  <CardMedia
                    className={classes.img}
                    image={`http://localhost:4000/${item.pathImages}`}
                  />
                </Grid>
                <Grid>
                  <Typography
                    classes={{ root: classes.qaz }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {item.name}
                  </Typography>
                  {item.application.map((items) => {
                    return (
                      <div>
                        {user.filter((users) => {
                          return <div>{items._id === users._id}</div>;
                        })}
                      </div>
                    );
                  })}
                </Grid>

                <Grid>
                  <Link to={`/edit/${item._id}`}>Изменить</Link>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Удалить
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          );
        }
      })}
    </Grid>
  );
}

export default ProductUserById;
