import { useTranslation } from "react-i18next";

export default function TodayExpense() {
  const { t } = useTranslation();
  return (
    <aside className="flex justify-between">
      <div className="text-stone-900 flex flex-col">
        <span className="text-md text-stone-500 font-bold">
          {t("main.todayExpenses")}
        </span>
        <strong className="text-4xl font-extrabold">557.46 €</strong>
      </div>
      <div className="text-stone-900 flex flex-col justify-end h-full">
        <strong className="flex w-full justify-end font-bold">+2,4%</strong>
        <span className="text-md font-bold">
          {t("main.comparedToYesterday")}
        </span>
      </div>
    </aside>
  );
}
