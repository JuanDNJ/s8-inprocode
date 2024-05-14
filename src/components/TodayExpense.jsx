import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentExpense, getYesterdayExpense } from "../store/thunks";
import { getSelector } from "../store";

export default function TodayExpense() {
  const { t } = useTranslation();
  const { theme } = getSelector((state) => state.theme);
  const { currentExpense, yesterdayExpense } = useSelector(
    (state) => state.expenses
  );
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getCurrentExpense());
    dispacth(getYesterdayExpense());
  }, []);

  return (
    <aside className="flex justify-between">
      <div className="text-stone-900 flex flex-col">
        <span className={`text-md ${theme.textColorBars} font-bold`}>
          {t("todayExpenses")}
        </span>
        <strong className={`text-4xl ${theme.textColorBars} font-extrabold`}>
          {currentExpense}{" "}
          <strong className="text-red-500">{t("typeOfCurrency")}</strong>
        </strong>
      </div>
      <div
        className={`${theme.textColorBars} flex flex-col justify-end h-full`}
      >
        <strong className="flex w-full justify-end font-bold">
          +2,4% {yesterdayExpense}
        </strong>
        <small className="text-md font-bold">{t("comparedToYesterday")}</small>
      </div>
    </aside>
  );
}
