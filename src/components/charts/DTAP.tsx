import { Card } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Porcentaje de Participacion Actual',
        },
    },
};

const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            label: 'Porcentaje',
            data: [65, 18, 17],
            backgroundColor: [
                'rgba(5, 102, 141, 0.2)',
                'rgba(103, 148, 54, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(5, 102, 141, 1)',
                'rgba(103, 148, 54, 1)',
                'rgba(235, 242, 42, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function DTAP() {
    return (
        <Card className="w-2/5	m-2">
            <Doughnut options={options} data={data} />
        </Card>
    )
}