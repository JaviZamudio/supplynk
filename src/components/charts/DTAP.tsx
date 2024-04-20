import { Card } from "@nextui-org/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    caseData: string;
}

type DoughnutChartData = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
};

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

const DTAP: React.FC<Props> = ({ caseData }) => {
    // Datos predeterminados antes de aplicar la lógica del switch
    const defaultData: DoughnutChartData = {
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

    let data: DoughnutChartData = defaultData;

    // Aplicar lógica del switch para modificar los datos según caseData
    switch (caseData) {
        case '1 mes':
            data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        label: 'Porcentaje',
                        data: [45, 35, 20],
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
            break;
        case '2 meses':
            data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        label: 'Porcentaje',
                        data: [30, 20, 5],
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
            break;
        case '3 meses':
            data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        label: 'Porcentaje',
                        data: [65, 18, 10],
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
            break;
        default:
            break;
    }

    return (
        <Card className="w-full	p-4 row-span-2 justify-center">
            <Doughnut options={options} data={data} />
        </Card>
    );
}

export default DTAP;
