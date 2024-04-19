import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
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

export const data = {
    labels: ['Enero', 'Febrero', 'Marzo'],
    datasets: [
        {
            label: 'A',
            data: [50, 80, 65],
            backgroundColor: 'rgba(5, 102, 141, 0.5)',
            borderColor: 'rgb(5, 102, 141)',
            tension: 0.4
        },
        {
            label: 'B',
            data: [30, 15, 18],
            backgroundColor: 'rgba(103, 148, 54, 0.5)',
            borderColor: 'rgb(103, 148, 54)',
            tension: 0.4
        },
        {
            label: 'C',
            data: [20, 5, 17],
            backgroundColor: 'rgba(235, 242, 42, 0.5)',
            borderColor: 'rgb(235, 242, 42)',
            tenson: 0.4
        },
    ],
}

export function LTCAMEP() {
    return <Line options={options} data={data} />
}