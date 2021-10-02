import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addApplication } from "../../../redux/features/service";

function Application() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.application.token);

  const handleAddApplications = () => {
    dispatch(addApplication(id));
  };

  return (
    <Button variant="contained" color="primary" onClick={handleAddApplications}>
      Отклик
    </Button>
  );
}

export default Application;
