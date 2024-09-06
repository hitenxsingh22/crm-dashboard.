// Indicate that this is a client component in Next.js
"use client";

// Define the TimeSelector component, which takes `current` and `onTimeChange` as props
const TimeSelector = ({ current, onTimeChange }) => {
  return (
    <div className="mb-4 text-center">
      {/* Dropdown menu to select time frame */}
      <select
        value={current}  // Controlled component: value is set by `current` prop
        onChange={(e) => onTimeChange(e.target.value)}  // Calls `onTimeChange` prop function with the new value when changed
        className="p-2 border rounded-md font-bold text-gray-500 mx-auto block"  // Styling for dropdown menu
      >
        {/* Options for selecting different time frames */}
        <option value="daily">Last 1 Day</option>
        <option value="weekly">Last 1 Week</option>
        <option value="monthly">Last 1 Month</option>
      </select>
    </div>
  );
};

// Export the TimeSelector component for use in other parts of the application
export default TimeSelector;
