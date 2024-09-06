// Indicate that this is a client component in Next.js
"use client";

// Import the Pie component from react-chartjs-2 and necessary chart elements from Chart.js
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements for rendering a Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the PieChart component, which receives `data` as a prop
const PieChart = ({ data }) => {
  // Configuration for the chart's data
  const chartData = {
    labels: data.labels,  // Define labels for each Pie slice
    datasets: [{
      data: data.values,  // Data values corresponding to each label
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],  // Define colors for each slice
    }],
  };

  // Configuration options for the chart's behavior and appearance
  const options = {
    responsive: true,             // Ensure the chart resizes with its container
    maintainAspectRatio: true,    // Maintain a consistent aspect ratio
    aspectRatio: 1.5,             // Determine the width-to-height ratio within the container
  };

  // Return the JSX for rendering the Pie chart within a styled container
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 m-4 w-[28rem] h-[24rem]">
      {/* Heading for the Pie chart with styling */}
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">Statistics Breakdown</h2>
      {/* Render the Pie component with defined data and options */}
      <Pie data={chartData} options={options} />
    </div>
  );
};

// Export the PieChart component for use in other parts of the application
export default PieChart;
