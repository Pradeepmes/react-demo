// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Charts = () => {
  const arr = [500, 800, 750, 900, 1100];
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: arr,
        borderColor: 'blue',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
};

export default Charts;
