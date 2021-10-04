import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  addApplication,
  getApplication,
} from "../../../redux/features/service";

function Application() {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.service);

  const { id } = useParams();

  const [click, setClick] = useState(application.accepted);

  const token = useSelector((state) => state.application.token);

  useEffect(() => {
    dispatch(getApplication(id));
  }, []);

  useEffect(() => {
    setClick(application.accepted);
  }, [application.accepted]);

  const handleAddApplications = () => {
    dispatch(addApplication(id));

    setClick("Заявка отправлена");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleAddApplications}>
      {click === null
        ? "Отклик"
        : click === false
        ? "Заявка отправлена"
        : "Заявка принята"}
    </Button>
  );
}

export default Application;
