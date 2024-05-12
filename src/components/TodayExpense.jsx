import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCurrentDay, getCurrentMounth, getCurrentWeek } from "../utils";

export default function TodayExpense() {
  const { t } = useTranslation();
  const [todayExpense, setTodayExpense] = useState();

  const getExpense = async (mounth = 4, week = 3, day = 3) => {
    const request = await fetch(
      `https://s8-inprocode-default-rtdb.europe-west1.firebasedatabase.app/balance/0/months/${mounth}/weeks/${week}/days/${day}.json`
    );
    const response = await request.json();
    console.log(response);
    setTodayExpense(() => response.expense);
  };

  useEffect(() => {
    console.log(getCurrentMounth(), getCurrentWeek(), getCurrentDay());
    getExpense(getCurrentMounth(), getCurrentWeek(), getCurrentDay());
  }, []);

  return (
    <aside className="flex justify-between">
      <div className="text-stone-900 flex flex-col">
        <span className="text-md text-stone-500 font-bold">
          {t("main.todayExpenses")}
        </span>
        <strong className="text-4xl font-extrabold">{todayExpense} €</strong>
      </div>
      <div className="text-stone-900 flex flex-col justify-end h-full">
        <strong className="flex w-full justify-end font-bold">+2,4%</strong>
        <small className="text-md font-bold">
          {t("main.comparedToYesterday")}
        </small>
      </div>
    </aside>
  );
}
