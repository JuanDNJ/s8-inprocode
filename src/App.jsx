import { useTranslation } from "react-i18next";
import BarsChart from "./components/BarsChart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMounths, getWeeksByIdMonth } from "./store/thunks";
import Header from "./components/Header";
import TodayExpense from "./components/TodayExpense";
import Aside from "./components/Aside";

export default function App() {
  const { t } = useTranslation();
  const { countMonth } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMounths({ idMounth: countMonth }));
    dispatch(getWeeksByIdMonth({ idBalance: 0, idMonth: countMonth }));
  }, [countMonth, dispatch]);
  return (
    <>
      <Header />
      <Aside />
      <article className="flex flex-col  bg-white rounded-xl p-8 gap-8">
        <h2 className="text-xl md:text-2xl text-stone-900 font-extrabold">
          {t("main.title")}
        </h2>
        <BarsChart />
        <TodayExpense />
      </article>
    </>
  );
}
