import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ResponsiveLineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            
            }
        ]
    };

    const options = {
        maintainAspectRatio: false, // This will prevent the chart from taking the full width
        responsive: true,
        
    };

    return (
        <div className='w-full lg:w-10/12 h-[40vh] bg-blue-200 p-4 rounded-lg'>
            <Line data={data} options={options} />
        </div>
    );
};

export default ResponsiveLineChart;
