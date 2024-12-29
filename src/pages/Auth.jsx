import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { LOGIN, REGISTER } from "../utils/auth";
import { setActiveTabe } from "../slices/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { activeTab } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const token = localStorage.getItem("user");

  if (token) return <Navigate to="/" />; // if user login , do not show auth page

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-around mb-4 border-b-2">
          <button
            className={`py-2 px-4 ${
              activeTab === LOGIN
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => dispatch(setActiveTabe(LOGIN))}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === REGISTER
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => dispatch(setActiveTabe(REGISTER))}
          >
            Register
          </button>
        </div>

        {activeTab === LOGIN ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default AuthPage;
