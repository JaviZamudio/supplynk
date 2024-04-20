import { Card } from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
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
            text: 'Analysis CAMEP',
        },
    },
};

const data = {
    labels: ['500', '1000', '1250', '2000', '3000', '4000'],
    datasets: [
        {
            label: 'CAMEP',
            data: [4000, 3000, 2500, 2800, 4100, 4600],
            backgroundColor: 'rgba(5, 102, 141, 0.5)',
            borderColor: 'rgb(5, 102, 141)',
            tension: 0.4
        },
        {
            label: 'Costo Anual de Mantenimiento',
            data: [480, 960, 1250, 1920, 2880, 3840],
            backgroundColor: 'rgba(103, 148, 54, 0.5)',
            borderColor: 'rgb(103, 148, 54)',
            tension: 0.4
        },
        {
            label: 'Costo Anual de Pedidos',
            data: [4700, 1850, 1250, 1000, 500, 250],
            backgroundColor: 'rgba(235, 242, 42, 0.5)',
            borderColor: 'rgb(235, 242, 42)',
            tenson: 0.4
        },
    ],
}

export default function LTCAMEP() {
    return (
        <Card className="w-full p-4 col-span-2 max-w-3xl mx-auto">
            <Line options={options} data={data} />
        </Card>
    )
}