import React, { useEffect } from "react";
import Header from "./Header";

import { useDispatch } from "react-redux";
import { asyncChartData } from "../../slices/chartSlice";
import Common from "./Common";

const Charts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncChartData()); // api call
  }, []);

  return (
    <>
      <Header />
      <Common />
    </>
  );
};

export default Charts;
