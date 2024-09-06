"use client"; // This directive indicates a client component in Next.js

// Import React hooks for state management and lifecycle handling, and other necessary components
import { useState, useEffect } from 'react';
import TimeSelector from './components/TimeSelector';
import ChartCard from './components/ChartCard';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';

// Define the Dashboard component
const Dashboard = () => {
  // Initialize state for the selected time window ('daily', 'weekly', 'monthly')
  const [timeWindow, setTimeWindow] = useState('daily');
  // Initialize state to store the fetched statistics data
  const [data, setData] = useState(null);

  // useEffect hook to handle data fetching whenever the timeWindow changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/statistics'); // Fetch statistics data from the API
      const jsonData = await response.json(); // Parse the JSON response
      setData(jsonData[timeWindow]); // Update the state with data for the current time window
    };

    fetchData(); // Initiate the data fetching function
  }, [timeWindow]); // Dependency array: effect runs when timeWindow changes

  // Render the component's UI
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold mb-10 text-center">CRM Statistics Dashboard</h1> {/* Dashboard title */}
      <TimeSelector current={timeWindow} onTimeChange={setTimeWindow} /> {/* Time selector component */}

      {data && ( // Render the charts if data is available
        <div className="flex flex-wrap justify-center gap-4 lg:gap-x-20">
          <PieChart data={data} /> {/* Render the PieChart component */}
          <BarChart data={data} /> {/* Render the BarChart component */}
        </div>
      )}

      {data && ( // Render chart cards if data is available
        <div className="flex flex-wrap mt-4 justify-center">
          {data.labels.map((label, index) => ( // Map over data labels to create individual chart cards
            <ChartCard key={index} title={label} value={data.values[index]} /> // Render ChartCard for each piece of data
          ))}
        </div>
      )}
    </div>
  );
};

// Export the Dashboard component for use in other parts of the application
export default Dashboard;
