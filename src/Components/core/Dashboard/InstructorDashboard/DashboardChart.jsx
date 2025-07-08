
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardChart = ({ details, currentChart }) => {
  const generateColors = (num, opacity = 1) => {
    const colors = [
      `rgba(59, 130, 246, ${opacity})`,   // Blue
      `rgba(16, 185, 129, ${opacity})`,   // Emerald
      `rgba(245, 158, 11, ${opacity})`,   // Amber
      `rgba(239, 68, 68, ${opacity})`,    // Red
      `rgba(139, 92, 246, ${opacity})`,   // Violet
      `rgba(236, 72, 153, ${opacity})`,   // Pink
      `rgba(14, 165, 233, ${opacity})`,   // Sky
      `rgba(34, 197, 94, ${opacity})`,    // Green
    ];

    const result = [];
    for (let i = 0; i < num; i++) {
      result.push(colors[i % colors.length]);
    }
    return result;
  };

  const StudentsData = {
    labels: details?.map(course => course?.courseName) || [],
    datasets: [
      {
        label: 'Students Enrolled',
        data: details?.map(course => course?.totalStudents) || [],
        backgroundColor: generateColors(details?.length || 0, 0.8),
        borderColor: generateColors(details?.length || 0, 1),
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const RevenueData = {
    labels: details?.map(course => course?.courseName) || [],
    datasets: [
      {
        label: 'Revenue (₹)',
        data: details?.map(course => course?.totalRevenue) || [],
        backgroundColor: generateColors(details?.length || 0, 0.8),
        borderColor: generateColors(details?.length || 0, 1),
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 8,
          boxHeight: 8,
          padding: 16,
          font: {
            size: 12,
            weight: '500',
            family: 'Inter, system-ui, sans-serif',
          },
          color: '#C5C7D4',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(22, 29, 41, 0.95)',
        titleColor: '#F1F2FF',
        bodyColor: '#C5C7D4',
        borderColor: '#424854',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            if (currentChart === 'revenue') {
              return `${label}: ₹${value.toLocaleString()} (${percentage}%)`;
            }
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
    interaction: {
      intersect: false,
    },
  };

  if (!details || details.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-richblack-300">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-richblack-700 flex items-center justify-center">
            📊
          </div>
          <p>No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 animate-fade-in">
      <div className="h-64 md:h-80">
        <Pie
          data={currentChart === 'revenue' ? RevenueData : StudentsData}
          options={options}
        />
      </div>
    </div>
  );
};

export default DashboardChart;
