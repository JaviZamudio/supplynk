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
    labels: ['Barras de Metal', 'Vigas de Metal', 'Calderos', 'Llaves', 'Tenedores', 'Cucharas', 'Cuchillos'],
    datasets: [
        {
            label: 'Primer Lote',
            data: [1, 0.8, 1, 0.9, 0.7, 1, 1],
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
            data: [1, 1, 0.7, 1, 0.9, 1, 0.9],
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
            data: [1, 0.9, 1, 0.9, 0.8, 1, 1],
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