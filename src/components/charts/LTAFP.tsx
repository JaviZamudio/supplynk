import { Card } from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import type { ChartData, ChartArea } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Analysis de inventario a futuro',
        },
    },
};

const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
        {
            label: 'A',
            data: [50, 80, 65, NaN, NaN, NaN],
            backgroundColor: 'rgba(5, 102, 141, 0.5)',
            borderColor: 'rgb(5, 102, 141)',
        },
        {
            label: 'B',
            data: [30, 15, 18, NaN, NaN, NaN],
            backgroundColor: 'rgba(103, 148, 54, 0.5)',
            borderColor: 'rgb(103, 148, 54)',
        },
        {
            label: 'C',
            data: [20, 5, 17, NaN, NaN, NaN],
            backgroundColor: 'rgba(235, 242, 42, 0.5)',
            borderColor: 'rgb(235, 242, 42)',
        },
        {
            label: 'A-Proxima',
            data: [NaN, NaN, 65, 70, 50, 90],
            backgroundColor: 'rgba(5, 102, 141, 0.5)',
            borderColor: 'rgb(5, 102, 141)',
        },
        {
            label: 'B-Proxima',
            data: [NaN, NaN, 18, 20, 30, 7],
            backgroundColor: 'rgba(103, 148, 54, 0.5)',
            borderColor: 'rgb(103, 148, 54)',
        },
        {
            label: 'C',
            data: [NaN, NaN, 17, 10, 20, 3],
            backgroundColor: 'rgba(235, 242, 42, 0.5)',
            borderColor: 'rgb(235, 242, 42)',
        },
    ],
}

export default function LTAFP() {
    return (

        <Card className="w-2/5	m-2 flex justify-center">
            <Line options={options} data={data} className="w-full" />
        </Card>

    )
}