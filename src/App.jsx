import { useTranslation } from "react-i18next";
import BarsChart from "./components/BarsChart";
import Header from "./components/Header";
import TodayExpense from "./components/TodayExpense";
import Aside from "./components/Aside";
import SelectTheme from "./components/SelectTheme";
import { getSelector } from "./store";


export default function App() {
  const { t } = useTranslation();
  const { theme } = getSelector((state) => state.theme);

  return (
    <section className="md:w-[768px] m-auto mt-10 p-2 flex flex-col gap-8">
      <Header />
      <Aside />
      <article
        className={`flex flex-col gap-4 ${theme.backgroundColor} p-4 rounded-md`}
      >
        <SelectTheme />
        <h2 className="text-xl md:text-2xl text-stone-900 font-extrabold p-4">
          {t("title")}
        </h2>
        <BarsChart />
        <TodayExpense />
      </article>
    </section>
  );
}
