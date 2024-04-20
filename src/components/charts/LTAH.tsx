import { Card } from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import type { ChartData, ChartArea } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
    caseData: string;
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Historial % de venta ABC',
        },
    },
};

const LTAH: React.FC<Props> = ({ caseData }) => {
    let data = {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
            {
                label: 'A',
                data: [50, 80, 60],
                backgroundColor: 'rgba(5, 102, 141, 0.5)',
                borderColor: 'rgb(5, 102, 141)',
            },
            {
                label: 'B',
                data: [30, 15, 23],
                backgroundColor: 'rgba(103, 148, 54, 0.5)',
                borderColor: 'rgb(103, 148, 54)',
            },
            {
                label: 'C',
                data: [20, 5, 17],
                backgroundColor: 'rgba(235, 242, 42, 0.5)',
                borderColor: 'rgb(235, 242, 42)',
            },
        ],
    };

    // Actualizar datos según el caso seleccionado
    switch (caseData) {
        case '2 meses':
            data.datasets[0].data = [40, 70, 50];
            data.datasets[1].data = [20, 10, 15];
            data.datasets[2].data = [10, 3, 10];
            break;
        case '3 meses':
            data.datasets[0].data = [60, 90, 70];
            data.datasets[1].data = [40, 20, 30];
            data.datasets[2].data = [30, 10, 20];
            break;
        default:
            break;
    }

    return (
        <Card className="w-full p-4">
            <Line options={options} data={data} className="w-full" />
        </Card>
    )
}

export default LTAH;
