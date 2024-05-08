import { useTranslation } from "react-i18next";
import Menu from "./Menu";

import { getSelector } from "../store";

export default function TotalBalance() {
  const { totalBalanceWeek } = getSelector((state) => state.balance);

  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-between p-4 bg-[#EC765C] rounded-xl">
      <article className="flex flex-col">
        <h2 className="text-stone-200 font-bold"> {t("main.totalBalance")}</h2>
        <strong className="text-4xl text-center font-bold">
          {totalBalanceWeek} €
        </strong>
      </article>
      <article>
        <Menu />
      </article>
    </section>
  );
}
