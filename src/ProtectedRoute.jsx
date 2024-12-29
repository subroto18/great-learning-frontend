import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
  const loggedInUserName = localStorage.getItem("loggedInUserName");
  const auth = JSON.parse(localStorage.getItem("auth"));

  let token = false;

  if (loggedInUserEmail) {
    if (auth) {
      const LoggedInUser = auth?.filter(
        (item) =>
          item.email === loggedInUserEmail && item.name === loggedInUserName
      );
      if (LoggedInUser?.length > 0) {
        token = true;
      }
    }
  }

  return token ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
