import React, { useState, useEffect } from "react";
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
import zoomPlugin from "chartjs-plugin-zoom";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";

// Register necessary ChartJS components and the zoom plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const Common = () => {
  const {
    loading,
    data: chartResponse,
    error,
  } = useSelector((store) => store.chart);

  const postMap = {};

  chartResponse.forEach((comment) => {
    const key = comment.postId;
    const value = `${comment.email}`;
    postMap[key] = value;
  });

  if (loading) return <Loader />;

  if (error) return <Error data={error} />;

  // Prepare the data for the chart
  const labels = Object.keys(postMap);

  const counts = Object.values(postMap).map((values) => values.length); // Count how many emails-titles exist per postId

  const chartData = {
    labels: labels, // X-axis labels
    datasets: [
      {
        label: "Email Count per Email",
        data: counts, // Y-axis data points
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1, // Border width
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
        text: "Comments Count per Post & Email",
      },
    },
    scales: {
      x: {
        // Configure the x-axis for scrolling/panning
        type: "category",
        title: {
          display: true,
          text: "Post ID - Email",
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    // Zoom and Pan configuration
    zoom: {
      pan: {
        enabled: true,
        mode: "xy", // Allow pan on both axes
      },
      zoom: {
        enabled: true,
        mode: "xy", // Allow zoom on both axes
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Common;
