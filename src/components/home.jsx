import React from "react";
import { Line } from "react-chartjs-2";
import "../../src/styles/global.css";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Register necessary chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const revenueData = [
  { date: "2025-01-01", revenue: 5000 },
  { date: "2025-01-02", revenue: 6000 },
  // More data...
];

const Home = () => {
  // Prepare data for the chart
  const data = {
    labels: revenueData.map((item) => item.date),
    datasets: [
      {
        label: "Revenue Generated",
        data: revenueData.map((item) => item.revenue),
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Revenue ($)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div className="title">
        <h1>Revenue Generated</h1>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Home;
