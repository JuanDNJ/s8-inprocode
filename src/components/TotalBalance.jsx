import { useTranslation } from "react-i18next";
import { getSelector } from "../store";

export default function TotalBalance() {
  // const { currentMonth } = getSelector((state) => state.currentMonth);
  const { t } = useTranslation();
  const { theme } = getSelector((state) => state.theme);
  return (
    <article className="flex flex-[25%] md:flex-[65%] items-start flex-col">
      <h2 className="text-stone-200 font-bold"> {t("totalBalance")}</h2>
      <strong className="text-4xl text-center font-bold">1589 €</strong>
    </article>
  );
}
