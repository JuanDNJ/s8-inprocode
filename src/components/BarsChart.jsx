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
import { getDispacth, getSelector } from "../store";
import { useEffect, useState } from "react";
import { setTodayExpense, setWeekExpense } from "../store/slices/bills";

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

export default function BarsChart() {
  const { countWeek, countMonth, current_date, bills } = getSelector(state => state.balance_sheets)

  const dispatch = getDispacth()
  const [gastos] = useState(bills)
  const [data, setData] = useState([])

  const { t } = useTranslation();
  const { theme } = getSelector((state) => state.theme);

  const current_year = Object.values(gastos[current_date.year])

  const month = current_year[countMonth]
  const week = month[countWeek];

  const name_days = week.map(week => t(`days.${week.name.toLowerCase()}`))

  useEffect(() => {
    const data = week.map(res => res.bill)
    const dayExpense = Object.values(current_year[current_date.month][current_date.week])

    setData(data)
    dispatch(setWeekExpense(week))
    dispatch(setTodayExpense(dayExpense[current_date.day].bill))

  }, [gastos, countWeek, countMonth])

  return (
    <Bar
      data={{
        labels: name_days,
        datasets: [
          {
            label: "Expense",
            data,
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
