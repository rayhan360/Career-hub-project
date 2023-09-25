import { useState } from 'react';
import { Pie } from 'react-chartjs-2';

function StatisticsPage() {
  const [selectionDonation] = useState(500); // Replace with your actual value
  const [totalDonation] = useState(1000); // Replace with your actual value

  // Calculate the values for the pie chart
  const firstValue = 100 - ((selectionDonation / totalDonation) * 100);
  const secondValue = ((selectionDonation / totalDonation) * 100);

  // Define the data for the Pie chart
  const data = {
    labels: ['First Value', 'Second Value'],
    datasets: [
      {
        data: [firstValue, secondValue],
        backgroundColor: ['red', 'blue'], // Customize colors as needed
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: false, // Prevent the chart from maintaining a fixed aspect ratio

    // Title configuration
    title: {
      display: true,
      text: 'Donation Statistics',
      fontSize: 18,
    },

    // Tooltip configuration
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const value = dataset.data[tooltipItem.index];
          return `${data.labels[tooltipItem.index]}: ${value}%`;
        },
      },
    },

    // Legend configuration
    legend: {
      display: true,
      position: 'top', // You can change the legend position (top, bottom, left, right)
    },

    // Animation configuration
    animation: {
      animateRotate: true, // Animate the rotation of the pie chart
      animateScale: true, // Animate the scaling of the pie chart
    },
  };


  return (
    <div>
      <h1>Statistics Page</h1>
      <Pie data={data} options={options} />
    </div>
  );
}

export default StatisticsPage;
