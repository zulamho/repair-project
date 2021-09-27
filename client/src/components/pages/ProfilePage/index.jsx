import { Grid } from "@mui/material";
import Header from "../HomePage/Header";
import ProfilePage from "./ProfilePage";
import Services from "./Services";

function Profile() {
  return (
    <Grid>
      <Header />
      <ProfilePage />
      <Services />
    </Grid>
  );
}

export default Profile;
