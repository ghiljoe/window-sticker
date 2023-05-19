import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
ChartJS.register(
    ChartDataLabels,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const data = {
    labels: ['4 mos ago', '3 mos ago', '2 mos ago', '1 mos ago', 'Today'],
    datasets: [
        {
            fill: true,
            label: 'Price',
            data: [24282, 23599, 22610, 22159, 20851],
            borderColor: 'rgba(86, 202, 0, 0.63)',
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(86, 202, 0, 0.63)");
                gradient.addColorStop(1, "rgba(86, 202, 0, 0)");
                return gradient;
            },
            pointRadius: 7,
            pointBackgroundColor: 'rgba(86, 202, 0, 0.63)',
            pointBorderColor: '#fff',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(86, 202, 0, 0.63)',
            pointHoverBorderColor: '#fff',
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            display: true,
            color: "gray",
            formatter: function (value, context) {
                return '$' + value;
            },
            offset: 2,
            align: "end"
        }
    },
    scales: {
        y: {
            ticks: {
                display: false,
                beginAtZero: true,
            },
            grid: {
                drawBorder: false,
                display: false,
            },
        },
    },
};

function Chart() {
    return <Line data={data} options={options} />;
}

export default Chart;
