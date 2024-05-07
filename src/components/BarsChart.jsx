import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// TODO: Refactorizar
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
// find a way to TODO

const beneficios = [200, 56, 20, 36, 90, 40, 30];
const gastos = [0, -100, -5, -88, -10, -4, -200];
const semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const data = {
  labels: semana,
  datasets: [
    {
      label: "Beneficios",
      data: beneficios,
      backgroundColor: "#0099",
      borderColor: "#333",
      borderWidth: 1,
      borderRadius: 5,
    },
    {
      label: "Gastos",
      data: gastos,
      backgroundColor: "#ef4444",
      borderColor: "#333",
      borderWidth: 1,
      borderRadius: 5,
    },
  ],
};
const options = {
  animation: true,
  responsive: true,
};
export default function BarsChart() {
  return <Bar data={data} option={options} />;
}
