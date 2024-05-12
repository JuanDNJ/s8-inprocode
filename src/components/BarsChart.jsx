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
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const { countWeek } = useSelector((state) => state.counter);
  const { week, updateWeek } = useWeek();

  const createDataDays = () => {
    if (data.length > 0) {
      dispatch(setWeekCount(data.length));
      const reduce = data[countWeek].days.reduce(
        (acc, next) => [...acc, next.expense],
        []
      );

      updateWeek(reduce);
    }
  };
  useEffect(() => {
    createDataDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, countWeek]);
  return (
    data && (
      <Bar
        data={{
          labels: [
            t("main.week.monday"),
            t("main.week.tuesday"),
            t("main.week.wednesday"),
            t("main.week.thursday"),
            t("main.week.friday"),
            t("main.week.saturday"),
            t("main.week.sunday"),
          ],
          datasets: [
            {
              label: "Expense",
              data: week,
              backgroundColor: "#0099",
              borderColor: "#333",
              borderWidth: 1,
              borderRadius: 5,
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
