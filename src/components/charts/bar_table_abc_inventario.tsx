import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

{
    <Bar
        className="w-96"
        data={
            {
                labels: ['Tornillos', 'Placas', 'Destornillador'],
                datasets: [
                    {
                        label: 'A',
                        data: [23, 10, 5],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }
        }
    />
}