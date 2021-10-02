import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addApplication } from "../../../redux/features/service";

function Application() {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.service.service);

  const { id } = useParams();

  const [click, setClick] = useState(" Отклик");

  const token = useSelector((state) => state.application.token);

  const handleAddApplications = () => {
    dispatch(addApplication(id));

    setClick("Заявка отправлена");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleAddApplications}>
      {click}
    </Button>
  );
}

export default Application;
