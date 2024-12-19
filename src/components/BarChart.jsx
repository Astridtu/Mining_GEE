"use client";
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import {
  BarController,
  BarElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register necessary components
Chart.register(BarController, BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const MiningBarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Iron', 'Gold', 'Copper', 'Coal'],
      datasets: [
        {
          label: 'Mining Economic Contribution',
          data: [25, 5, 10, 60],
          backgroundColor: [
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(201, 203, 207)',
            'rgb(255, 205, 86)',
            'rgb(255, 159, 64)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1
          // Custom colors for each bar
        },
      ],
    };

    // Destroy previous chart instance to prevent memory leaks
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new bar chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Artifacts',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Contribution (%)',
            },
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        style={{
          width: '80vw',
          height: '80vh',
        }}
      >
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default MiningBarChart;
