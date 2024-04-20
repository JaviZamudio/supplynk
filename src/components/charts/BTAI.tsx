import { Card } from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
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



const data = {
    labels: labels,
    datasets: [
        {
            label: 'A',
            data: [23, 10, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
}

export default function BTAI() {
    return (
        <Card className="w-2/5	m-2">
            <Bar options={options} data={data} />
        </Card>


    )
}