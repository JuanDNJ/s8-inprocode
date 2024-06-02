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
import { getSelector } from "../store";
import bills from "../data/bills.json";


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

  const { current_date, allBills } = getSelector(state => state.balance_sheets)

  const { t } = useTranslation();

  const { theme } = getSelector((state) => state.theme);

  const current_year = bills[2024];
  const month = current_year['may'];

  const nameDays = month[1].map(week => t(`days.${week.name.toLowerCase()}`))
  const gastos = month[1].map(week => week.bill)
  console.log(current_date)

  return (
    <Bar
      data={{
        labels: nameDays,
        datasets: [
          {
            label: "Expense",
            data: gastos,
            backgroundColor: theme.backgroundColorBars,
            borderColor: theme.borderColorBars,
            borderWidth: 5,
            borderRadius: 10,
          },
        ],
      }}
      option={{
        animation: true,
        responsive: true,
      }}
    />
  )
    ;
}
