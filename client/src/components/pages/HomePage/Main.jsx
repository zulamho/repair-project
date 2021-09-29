import {
  Grid,
  Card,
  CardMedia,
  TextField,
  Typography,
  Box,
  InputBase,
} from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { fetchService, setFilterText } from "../../../redux/features/service";

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
    main: {
      marginBottom: "20px",
    },
    root: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    multilineColor: {
      color: "white",
    },
    inp: {
      background: "none",
      color: "white",
      margin: "auto",
    },
    cont: {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
    },
    texthead: {
      textAlign: "center",
      fontFamily: "Montserrat",
      color: "#F7F7F7",
      fontSize: "24px",
      paddingTop: "73px",
      paddingBottom: "36px",
    },
    textbody: {
      textAlign: "center",
      fontFamily: "Poppins",
      color: "#F7F7F7",
      fontSize: "38px",
      lineHeight: "80px",
      fontWeight: "bold",
    },
    inputRoot: {
      width: "200px",
      color: "white",
      border: "1px solid white",
      "&:hover": {
        border: "1px solid #FA4A0C",
      },
      textAlign: "center",
      borderRadius: "10px",
      marginLeft: "20px",
    },
    inputInput: {
      marginLeft: "10px",
      color: "white",
    },
  })
);

function Main() {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const service = useSelector((state) => state.service.service);
  const filter = useSelector((state) => state.service.filter);

  const service = useSelector((state) => {
    const { service } = state;

    if (service.filter === "") {
      return service.service;
    }

    return service.service.filter((item) => {
      console.log(service);
      return item.name.toLowerCase().includes(service.filter.toLowerCase());
    });
  });

  const [value, setValue] = useState("");

  // useEffect(() => {
  //   dispatch(fetchService());
  // }, [dispatch]);

  return (
    <>
      <Grid className={classes.content}> </Grid>
      <Grid className={classes.mainer}>
        <Grid className={classes.text}>
          <Typography className={classes.texthead}>Просто ремонт</Typography>
          <Typography className={classes.textbody}>
            Занимайтесь любимыми делами,
          </Typography>
          <Typography className={classes.textbody}>
            а ремонт доверьте проффесионалам
          </Typography>
        </Grid>
        <Grid className={classes.cont}>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}></Box>

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={filter}
              onChange={(e) => dispatch(setFilterText(e.target.value))}
            />
          </Box>
        </Grid>
      </Grid>
      <Card spacing={5} className={classes.root}>
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
      </Card>
    </>
  );
}

export default Main;
