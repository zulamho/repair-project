import {
  Grid,
  makeStyles,
  createStyles,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: "#030D15",
      height: "200px",
      padding: "0",
      display: "flex",
    },
    ftrp: {
      display: "flex",
      color: "white",
      width: "250px",
      fontFamily: "Hind Siliguri",
      fontSize: "14px",
      marginLeft: "70px",
      opacity: "80%",
    },
    logoimg: {
      height: "70px",
    },

    logolink: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      fontSize: "14px",
      marginLeft: "60px",
      textDecoration: "none",
      color: "primary",
      fontWeight: "700",
    },
    logolinks: {
      fontFamily: "Hind Siliguri",
      fontSize: "14px",
      marginLeft: "15px",
      marginTop: "25px",
    },
    cardH2: {
      display: "flex",
    },

    ulli: {
      fontFamily: "Hind Siliguri",
      display: "flex",
      color: "white",
      listStyleType: "none",
      marginTop: "30px",
      marginLeft: "100px",
      marginBottom: "20px",
    },
    fli: {
      fontFamily: "Hind Siliguri",
      fontSize: "16px",
      listStyleType: "none",
      marginBottom: "1em",
    },
    sli: {
      fontFamily: "Hind Siliguri",
      fontSize: "14px",
      listStyleType: "none",
      opacity: "60%",
      marginBottom: "0.7em",
      width: "180px",
    },
    cli: {
      fontFamily: "Hind Siliguri",
      fontSize: "14px",
      listStyleType: "none",
      marginBottom: "0.7em",
      width: "180px",
    },
  })
);

function Footer() {
  const classes = useStyles();

  return (
    <Grid className={classes.footer}>
      <Grid className={classes.ft}>
        <Grid className={classes.footleft}>
          <Typography gutterBottom variant="h5" component="h2">
            <NavLink to="/" className={classes.logolink}>
              <Grid className={classes.logolinks}>РЕМОНТ</Grid>
            </NavLink>
          </Typography>
        </Grid>
        <Grid>
          <Typography className={classes.ftrp}>
            STORE - worldwide fashion store since 1978. We sell over 1000+
            branded products on our web-site.
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.ulli}>
        <Grid>
          <ul>
            <li className={classes.fli}>INFORMATION</li>
            <li className={classes.sli}>New collection</li>
            <li className={classes.sli}>Contact US</li>
            <li className={classes.sli}>Your brand</li>
            <li className={classes.sli}>Everybody</li>
          </ul>
        </Grid>
        <Grid>
          <ul>
            <li className={classes.fli}>FOOTER MENU</li>
            <li className={classes.sli}>Send</li>
            <li className={classes.sli}>Me</li>
            <li className={classes.sli}>Location</li>
            <li className={classes.sli}>Geolocation</li>
          </ul>
        </Grid>
        <Grid>
          <ul>
            <li className={classes.fli}>USEFUL LINKS</li>
            <li className={classes.sli}>About Store</li>
            <li className={classes.sli}>Latest News</li>
            <li className={classes.sli}>Contact Us</li>
            <li className={classes.sli}>New Collection</li>
          </ul>
        </Grid>
        <Grid>
          <ul>
            <li className={classes.fli}>ABOUT THE STORE</li>
            <li className={classes.sli}>
              STORE - worldwide fashion store since 1978. We sell over 1000+
              branded products on our web-site.
            </li>
            <li className={classes.cli}>www.company.com</li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
