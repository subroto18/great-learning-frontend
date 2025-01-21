import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthorized } = useSelector((store) => store.auth);

  return isAuthorized ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
