import { Grid, Typography, Box, InputBase } from "@material-ui/core";
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { setFilterText } from "../../../redux/features/service";
import ServiceCard from "./ServiceCard";
import { Pagination, PaginationItem } from "@mui/material";

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

const useStyles = makeStyles((theme) =>
  createStyles({
    mainer: {
      backgroundImage: `url("https://raw.githubusercontent.com/thebestdevelopering/repairProject/main/image/bg-applicant-supernova-1__min_.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 700px",
      height: "612px",
      marginBottom: "30px",
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
        border: "1px solid #ffb800",
      },
      textAlign: "center",
      borderRadius: "10px",
      marginLeft: "20px",
    },
    inputInput: {
      marginLeft: "10px",
      color: "white",
    },
    pages: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
    },
    page: {
      "&:hover": {
        color: "#ffb800",
      },
    },
  })
);

function Main() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const filter = useSelector((state) => state.service.filter);
  const { pages } = useSelector((state) => state.service);

  const query = parseQuery(window.location.search);
  const page = query.page ? Number(query.page) : 1;

  return (
    <>
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
      <ServiceCard />
      <Grid className={classes.pages}>
        <Pagination
          page={page}
          count={pages}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component="a"
              className={classes.page}
              href={`/?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Grid>
    </>
  );
}

export default Main;
