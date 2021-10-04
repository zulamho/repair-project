import { Grid } from "@mui/material";
import Footer from "../HomePage/Footer";
import Header from "../HomePage/Header";
import ProductById from "./ProductById";

function Product() {
  return (
    <Grid>
      <Header />
      <ProductById />
      <Footer />
    </Grid>
  );
}

export default Product;
