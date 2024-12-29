import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    // remove loginedUser from local storage

    localStorage.removeItem("loggedInUser"); // remove loggedIn user
    localStorage.removeItem("loggedInUserEmail"); // remove loggedIn user
    toast.success("Logged Out");

    // after loggedout redirect to login page
    navigate("/auth");
  };

  const loggedInUser =
    localStorage.getItem("loggedInUserName")?.split(" ")?.[0] ?? "Guest";

  return (
    <header className="bg-white text-dark flex items-center justify-between p-4">
      {/* Logo */}
      <div className="text-lg md:text-2xl font-bold">
        <a href="/" className="hover:underline">
          <img
            className="w-[10rem]"
            src={"https://influencerlabs.in/assets/img/logo.png"}
          />
        </a>
      </div>

      {/* Logged-in User */}
      <div className="text-sm md:text-base flex ">
        <p className="mr-2 py-1">
          Welcome, <span className="font-semibold">{loggedInUser}</span>
        </p>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
