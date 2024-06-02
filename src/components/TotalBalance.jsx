import { useTranslation } from "react-i18next";
import { getSelector } from "../store";

export default function TotalBalance() {
  const { weekExpense } = getSelector(state => state.expenses)
  const { t } = useTranslation();
  return (
    <article className="flex flex-[25%] md:flex-[65%] items-start flex-col">
      <h2 className="text-stone-200 font-bold"> {t("totalBalance")}</h2>
      <strong className="text-4xl text-center font-bold">{weekExpense} €</strong>
    </article>
  );
}
