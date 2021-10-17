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
  const [disabBtn, setDisabBtn] = useState("");
  const application = useSelector((state) => state.service);

  const { id } = useParams();

  const [click, setClick] = useState(application.accepted);

  useEffect(() => {
    dispatch(getApplication(id));
  }, [dispatch, id]);

  useEffect(() => {
    setClick(application.accepted);
  }, [application.accepted]);

  const handleAddApplications = () => {
    dispatch(addApplication(id));
    setClick("Заявка отправлена");
    setDisabBtn();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleAddApplications}
      disabled={
        click === null
          ? ""
          : click === false
          ? "true"
          : click === true
          ? "true"
          : ""
      }
    >
      {click === null
        ? "Отклик"
        : click === false
        ? "Заявка отправлена"
        : click === true
        ? "Заявка принята"
        : "Заявка отправлена"}
    </Button>
  );
}

export default Application;
