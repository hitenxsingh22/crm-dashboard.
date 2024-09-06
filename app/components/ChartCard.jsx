// Define the ChartCard component which takes in `title` and `value` props
const ChartCard = ({ title, value }) => {
  // Function to determine the background color based on the card's title
  const getColor = (title) => {
    switch (title) {
      case 'New Leads':
        return 'bg-pink-200'; // Pink for New Leads
      case 'Total Sales':
        return 'bg-blue-200'; // Blue for Total Sales
      case 'Lost Leads':
        return 'bg-yellow-200'; // Yellow for Lost Leads
      default:
        return 'bg-white'; // Default background color
    }
  };

  // Return the JSX for rendering the card
  return (
    <div
      className={`text-gray-600 rounded-lg shadow-md p-4 m-2 flex flex-col items-center ${getColor(title)}`}
    >
      {/* Display the title of the card */}
      <h2 className="text-lg font-semibold">{title}</h2>
      {/* Display the value associated with the title */}
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

// Export the ChartCard component for use in other parts of the application
export default ChartCard;
