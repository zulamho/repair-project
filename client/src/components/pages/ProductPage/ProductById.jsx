import { Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchService } from "../../../redux/features/service";

function ProductById() {
  const dispatch = useDispatch();
  const { id } = useParams();

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
          return (
            <Grid>
              <Grid>
                <Grid>
                  <img src={`/${item.pathImages}`} alt="" />
                </Grid>
                <Grid>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        }
      })}
    </Grid>
  );
}

export default ProductById;
