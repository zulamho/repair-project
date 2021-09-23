import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfilePages() {
  const dispatch = useDispatch();
  const user = useSelector((state) => user.application.users);
  console.log(user);

  return <>dddd</>;
}

export default ProfilePages;
