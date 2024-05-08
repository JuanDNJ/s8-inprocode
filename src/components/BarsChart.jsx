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
import { useTranslation } from "react-i18next";

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

export default function BarsChart() {
  const beneficios = [200, 56, 20, 36, 90, 40, 30];
  // const gastos = [0, -100, -5, -88, -10, -4, -200];

  const { t } = useTranslation();
  const week = t("main.week");
  console.log(week);
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
    ],
  };
  const options = {
    animation: true,
    responsive: true,
  };
  return <Bar data={data} option={options} />;
}
