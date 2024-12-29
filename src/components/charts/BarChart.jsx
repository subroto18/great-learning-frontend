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

import { useDispatch, useSelector } from "react-redux";

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
    data: chartResponse,
    error,
    active,
  } = useSelector((store) => store.chart);

  const postEmailMap = {};

  chartResponse.forEach((comment) => {
    const key = `${comment.postId}-${comment.email}`;
    if (postEmailMap[key]) {
      postEmailMap[key]++;
    } else {
      postEmailMap[key] = 1;
    }
  });

  // Prepare the data for the chart
  const labels = Object.keys(postEmailMap);
  const counts = Object.values(postEmailMap);

  // const labels = chartResponse?.map((item) => `Item ${item.postId}`);
  // const data = chartResponse?.map((item) => `Item ${item.email}`);

  const chartData = {
    labels: labels, // X-axis labels

    datasets: [
      {
        label: "Comments per Post & Email",

        data: counts, // Y-axis data points
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
        text: "Interactive Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the Y-axis from zero
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
