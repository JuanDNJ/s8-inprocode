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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWeek } from "../hooks/week";
import { setWeekCount } from "../store/slices/balanceSlice";
import { getSelector } from "../store";

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
  const { t } = useTranslation();
  const { data } = getSelector((state) => state.balance);
  const { theme } = getSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { countWeek } = useSelector((state) => state.counter);
  const { week, updateWeek } = useWeek();

  const createDataDays = () => {
    if (data.length > 0) {
      dispatch(setWeekCount(data.length));
      const reduce = data[countWeek - 1].days.reduce(
        (acc, next) => [...acc, next.expense],
        []
      );
      updateWeek(reduce);
    }
  };
  useEffect(() => {
    createDataDays();
  }, [data, countWeek]);
  return (
    data && (
      <Bar
        data={{
          labels: [
            t("days.sunday"),
            t("days.monday"),
            t("days.tuesday"),
            t("days.wednesday"),
            t("days.thursday"),
            t("days.friday"),
            t("days.saturday"),
          ],
          datasets: [
            {
              label: "Expense",
              data: week,
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
  );
}
