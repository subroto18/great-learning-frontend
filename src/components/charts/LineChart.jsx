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

const LineChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        // Process the data to get counts based on postId and email
        const postEmailMap = {};

        data.forEach((comment) => {
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

        setChartData({
          labels,
          datasets: [
            {
              label: "Comments per Post & Email",
              data: counts,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);

  if (!chartData)
    return (
      <div className="flex justify-center items-center h-[40rem]">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );

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

  const graphData = {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    datasets: [
      {
        label: "Sales Data", // The label for the dataset
        data: [65, 59, 80, 81, 56, 55], // Y-axis data points
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1, // Border width
      },
    ],
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
