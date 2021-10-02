import { Grid, Typography } from "@material-ui/core";
import { Button, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addApplication, fetchService } from "../../../redux/features/service";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Application from "./Application";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "300px",
      height: "300px",
    },
  })
);

function ProductById() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const [click, setClick] = useState(" Отклик");

  const handleAddApplications = () => {
    setClick("Заявка отправлена");
  };

  const service = useSelector((state) => {
    return state.service.service;
  });

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  return (
    <Grid>
      {service.map((item) => {
        if (item._id === id) {
          // {function namer(items) {
          //   return item.application.find((item) => {
          //     console.log(item.accepted);
          //     console.log(item);

          //     if (item.accepted == "false") {
          //       return setClick("Заявка отправлена");
          //     } else {
          //       return setClick("Заявка принята");
          //     }
          //   });

          // }}
          return (
            <Grid>
              <Grid>
                <Grid>
                  <CardMedia
                    className={classes.img}
                    image={`http://localhost:4000/${item.pathImages}`}
                  />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  {/* <Button>
                    {click}
                   
                  </Button>
                  */}
                </Grid>
                <Application />
              </Grid>
            </Grid>
          );
        }
      })}
      <Button></Button>
    </Grid>
  );
}

export default ProductById;
