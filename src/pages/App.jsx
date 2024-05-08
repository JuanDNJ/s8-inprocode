import BarsChart from "../components/BarsChart";
import SelectMonth from "../components/SelectMonth";
import TotalBalance from "../components/TotalBalance";
import { useTranslation } from "react-i18next";
export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <aside className="p-2">
        <SelectMonth />
        <TotalBalance />
      </aside>
      <article className="flex flex-col  bg-white rounded-xl p-8 gap-8">
        <h2 className="text-xl md:text-2xl text-stone-900 font-extrabold">
          {t("main.title")}
        </h2>
        <BarsChart />
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
      </article>
    </>
  );
}
