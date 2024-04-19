"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function Home() {
  return (
    <main>

      {<Bar
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
      />}
      <Button color="primary">Click me</Button>
      <Button color="secondary">Click me</Button>
    </main>
  );
}
