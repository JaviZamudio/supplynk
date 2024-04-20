import { Card } from "@nextui-org/react";
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'CP individual de Productos',
        },
    },
};

const data = {
    labels: ['Tornillos', 'Placas', 'Destornillador', 'Taquetes'],
    datasets: [
        {
            label: 'Primer Lote',
            data: [0.8, 1, 0.9, 1.5],
            backgroundColor: [
                'rgba(5, 102, 141, 0.2)',
            ],
            borderColor: [
                'rgba(5, 102, 141, 1)',
            ],
            borderWidth: 1,
        },
        {
            label: 'Segundo Lote',
            data: [0.7, 1, 1, 1.3],
            backgroundColor: [
                'rgba(103, 148, 54, 0.6)',
            ],
            borderColor: [
                'rgba(103, 148, 54, 1)',
            ],
            borderWidth: 1,
        },
        {
            label: 'Tercer Lote',
            data: [0.8, 0.7, 0.8, 1],
            backgroundColor: [
                'rgba(235, 242, 42, 1)',
            ],
            borderColor: [
                'rgba(235, 242, 42, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function BTCP() {
    return (
        <Card className="w-full p-4">
            <Bar options={options} data={data} />
        </Card>
    )
}