import React from "react";
import Header from "../common/Header";
import Body from "./Body";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Body */}

      <Body />

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Home;
