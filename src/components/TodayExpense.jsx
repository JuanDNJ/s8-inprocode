import { useTranslation } from "react-i18next";
import { getSelector } from "../store";

export default function TodayExpense() {
  const { t } = useTranslation();
  const { theme } = getSelector((state) => state.theme);
  const { todayExpense, compareYesterday } = getSelector(
    (state) => state.expenses
  );
  return (
    <aside className="flex justify-between">
      <div className="text-stone-900 flex flex-col">
        <span className={`text-md ${theme.textColorBars} font-bold`}>
          {t("todayExpenses")}
        </span>
        <strong className={`text-4xl ${theme.textColorBars} font-extrabold`}>
          {todayExpense}
          <strong className="text-red-500">{t("typeOfCurrency")}</strong>
        </strong>
      </div>
      <div
        className={`${theme.textColorBars} flex flex-col justify-end h-full`}
      >
        <strong className="flex w-full justify-end font-bold">
          {compareYesterday}%
        </strong>
        <small className="text-md font-bold">{t("comparedToYesterday")}</small>
      </div>
    </aside>
  );
}
