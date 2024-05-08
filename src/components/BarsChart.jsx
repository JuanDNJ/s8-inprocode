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
  const gastos = [200, 56, 20, 36, 90, 40, 30];
  const totalGastos = gastos.reduce((acc, next) => {
    acc = acc + next;
    return acc;
  });
  console.log(totalGastos);
  const { t } = useTranslation();
  const semana = [
    t("main.week.monday"),
    t("main.week.tuesday"),
    t("main.week.wednesday"),
    t("main.week.thursday"),
    t("main.week.friday"),
    t("main.week.saturday"),
    t("main.week.sunday"),
  ];
  const data = {
    labels: semana,
    datasets: [
      {
        label: "Gastos",
        data: gastos,
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
