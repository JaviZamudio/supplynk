import { Card } from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
    caseData: string;
}

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

const labels = ['Barras de Metal', 'Vigas de Metal', 'Calderos', 'Llaves', 'Tenedores', 'Cucharas', 'Cuchillos'];

export default function BTAI({ caseData }: Props) {
    let data = {
        labels: labels,
        datasets: [
            {
                label: 'A',
                data: [920, 840, 840, NaN, NaN, NaN, NaN],
                backgroundColor: 'rgba(5, 102, 141, 1)',
            },
            {
                label: 'B',
                data: [NaN, NaN, NaN, 560, 320, NaN, NaN],
                backgroundColor: 'rgba(103, 148, 54, 1)',
            },
            {
                label: 'C',
                data: [NaN, NaN, NaN, NaN, NaN, 280, 240],
                backgroundColor: 'rgba(235, 242, 42, 1)',
            },
        ],
    };

    // Actualizar datos según el caso seleccionado
    switch (caseData) {
        case '1 mes':
            data.datasets[0].data = [920, 840, 840, NaN, NaN, NaN, NaN];
            data.datasets[1].data = [NaN, NaN, NaN, 560, 320, NaN, NaN];
            data.datasets[2].data = [NaN, NaN, NaN, NaN, NaN, 280, 240];
            break;
        case '2 meses':
            data.datasets[0].data = [820, 770, 730, NaN, NaN, NaN, NaN];
            data.datasets[1].data = [NaN, NaN, NaN, 460, 270, NaN, NaN];
            data.datasets[2].data = [NaN, NaN, NaN, NaN, NaN, 250, 220];
            break;
        case '3 meses':
            data.datasets[0].data = [780, 720, 670, NaN, NaN, NaN, NaN];
            data.datasets[1].data = [NaN, NaN, NaN, 440, 240, NaN, NaN];
            data.datasets[2].data = [NaN, NaN, NaN, NaN, NaN, 220, 180];
            break;
        default:
            break;
    }

    return (
        <Card className="w-full p-4">
            <Bar className="w-full h-full" options={options} data={data} />
        </Card>
    )
}
