import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import api from "../../api/api";
import { asyncChartData } from "../../slices/chartSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: chartData,
    error,
  } = useSelector((store) => store.chart);

  const labels = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`);
  const data = Array.from({ length: 200 }, () =>
    Math.floor(Math.random() * 100)
  );

  useEffect(() => {
    dispatch(asyncChartData()); // api call
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Interactive Bar Chart",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
