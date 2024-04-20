import { Card } from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
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

const labels = ['Martillos', 'Destornillador', 'Tornillo', 'Pintura Blanca'];



const data = {
    labels: labels,
    datasets: [
        {
            label: 'A',
            data: [100, 150, NaN, NaN],
            backgroundColor: 'rgba(5, 102, 141, 1)',
        },
        {
            label: 'B',
            data: [NaN, NaN, 1000, NaN],
            backgroundColor: 'rgba(103, 148, 54, 1)',
        },
        {
            label: 'C',
            data: [NaN, NaN, NaN, 200],
            backgroundColor: 'rgba(235, 242, 42, 1)',
        },
    ],
}

export default function BTAI() {
    return (
        <Card className="w-full p-4">
            <Bar className="w-full h-full" options={options} data={data} />
        </Card>
    )
}