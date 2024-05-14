import { getSelector } from "../store";
import Menu from "./Menu";
import SelectMonth from "./SelectMonth";
import TotalBalance from "./TotalBalance";

export default function Aside() {
  const { theme } = getSelector((state) => state.theme);
  return (
    <aside
      className={`flex items-center p-4 ${theme.backgroundTotalBalance}  rounded-xl`}
    >
      <TotalBalance />
      <article className="flex flex-1 items-end flex-col gap-4">
        <SelectMonth />
        <Menu />
      </article>
    </aside>
  );
}
