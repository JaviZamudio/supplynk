import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Tabla de Inventario ABC',
        },
    },
};

const labels = ['Tornillos', 'Placas', 'Destornillador'];



export const data = {
    labels: labels,
    datasets: [
        {
            label: 'A',
            data: [23, 10, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
}

export function BTAI() {
    return <Bar options={options} data={data} />;
}