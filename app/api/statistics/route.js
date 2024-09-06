// Import NextResponse to create a response for the API endpoint
import { NextResponse } from 'next/server';

// Define the GET function to handle API requests
export async function GET() {
  // Mock data representing statistics for different time frames
  const data = {
    daily: {      // Data for daily statistics
      labels: ['New Leads', 'Total Sales', 'Lost Leads'], // Categories for data points
      values: [20, 15, 5],  // Corresponding values for each category
    },
    weekly: {     // Data for weekly statistics
      labels: ['New Leads', 'Total Sales', 'Lost Leads'],
      values: [100, 60, 20],
    },
    monthly: {    // Data for monthly statistics
      labels: ['New Leads', 'Total Sales', 'Lost Leads'],
      values: [300, 200, 50],
    },
  };

  // Return the mock data as a JSON response
  return NextResponse.json(data);
}
