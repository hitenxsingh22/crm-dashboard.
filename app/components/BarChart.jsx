// Indicate that this is a client component in Next.js
"use client";

// Import the Bar component from react-chartjs-2 and necessary elements from Chart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the elements needed for the Bar chart to work
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Define the BarChart component, which takes `data` as a prop
const BarChart = ({ data }) => {
  // Configuration for the chart data
  const chartData = {
    labels: data.labels,  // X-axis labels corresponding to data points
    datasets: [
      {
        label: 'Statistics',  // Label for the dataset, displayed in tooltips
        data: data.values,    // Y-axis data values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Bar colors matching data order
      },
    ],
  };

  // Options for configuring chart behaviors and appearance
  const options = {
    responsive: true,             // Ensures the chart size adjusts to container size
    maintainAspectRatio: true,    // Keeps the chart's aspect ratio consistent
    aspectRatio: 1.5,             // Determines width to height ratio of the chart
    plugins: {
      legend: {
        display: false,           // Disables the legend for a cleaner look
      },
    },
  };

  // JSX to render the Bar chart within a styled container
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 m-4 w-[28rem] h-[24rem]">
      {/* Heading for the bar chart with styling */}
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">Bar Chart Overview</h2>
      {/* Render the Bar component with the chart data and options */}
      <Bar data={chartData} options={options} />
    </div>
  );
};

// Export the BarChart component to be used in other parts of the application
export default BarChart;
