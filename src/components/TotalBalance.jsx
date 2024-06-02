import { useTranslation } from "react-i18next";

export default function TotalBalance() {
  // const { currentMonth } = getSelector((state) => state.currentMonth);
  const { t } = useTranslation();
  return (
    <article className="flex flex-[25%] md:flex-[65%] items-start flex-col">
      <h2 className="text-stone-200 font-bold"> {t("totalBalance")}</h2>
      <strong className="text-4xl text-center font-bold">1589 €</strong>
    </article>
  );
}

